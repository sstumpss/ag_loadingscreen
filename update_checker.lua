local resourceName = GetCurrentResourceName()
local localVersion = GetResourceMetadata(resourceName, 'version', 0)

-- Read config.js so we can pull checkForUpdates + repoUrl
local configData = LoadResourceFile(resourceName, 'config.js') or ""

-- Parse values
local checkForUpdates = string.match(configData, 'const%s+checkForUpdates%s*=%s*(true)') ~= nil
local repoUrl = string.match(configData, 'const%s+repoUrl%s*=%s*[\'"]([^\'"]+)[\'"]')

-- Run only when the resource starts
AddEventHandler('onResourceStart', function(resName)
    if resName ~= resourceName then return end
    Wait(2000) -- small delay so console prints nicely

    if not checkForUpdates or not repoUrl then
        print(("^3[%s]^7 Update checker disabled or repo URL missing."):format(resourceName))
        return
    end

    CreateThread(function()
        -- Convert GitHub repo URL → raw fxmanifest URL
        local rawManifest = repoUrl:gsub("github.com", "raw.githubusercontent.com") .. "/main/fxmanifest.lua"

        PerformHttpRequest(rawManifest, function(status, response)
            if status == 200 and response then
                local remoteVersion = response:match("version%s+'([%d%.]+)'")
                if remoteVersion then
                    if remoteVersion ~= localVersion then
                        print(("^1[%s]^7 Update available! ^3(Current: %s | Latest: %s)^7"):format(resourceName, localVersion or "unknown", remoteVersion))
                        print(("^2Download here:^7 %s"):format(repoUrl))
                    else
                        print(("^2[%s]^7 Running latest version (^3%s^7)."):format(resourceName, localVersion))
                    end
                else
                    print(("^3[%s]^7 Could not parse remote version from fxmanifest.lua."):format(resourceName))
                end
            else
                print(("^1[%s]^7 Failed to check for updates (HTTP %s)."):format(resourceName, status or "unknown"))
            end
        end)
    end)
end)
