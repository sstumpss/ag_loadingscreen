local resourceName = GetCurrentResourceName()
local localVersion = GetResourceMetadata(resourceName, 'version', 0)

-- Load config.js from html folder
local configData = LoadResourceFile(resourceName, 'html/config.js') or ""

-- Parse values from config.js
local checkForUpdates = string.match(configData, 'const%s+checkForUpdates%s*=%s*(true)') ~= nil
local repoUrl = string.match(configData, 'const%s+repoUrl%s*=%s*[\'"]([^\'"]+)[\'"]')

-- Run once when the resource starts
AddEventHandler('onResourceStart', function(resName)
    if resName ~= resourceName then return end
    Wait(2000) -- Give console time to initialize

    if not checkForUpdates or not repoUrl or repoUrl == "" then
        print(("^3[%s]^7 Update checker disabled or repo URL missing."):format(resourceName))
        return
    end

    CreateThread(function()
        -- Convert GitHub repo URL → raw fxmanifest.lua URL
        local rawManifest = repoUrl:gsub("github.com", "raw.githubusercontent.com") .. "/ag/fxmanifest.lua"

        PerformHttpRequest(rawManifest, function(status, response)
            if status == 200 and response then
                local remoteVersion = response:match("version%s+'([%d%.]+)'")
                if remoteVersion then
                    if remoteVersion ~= localVersion then
                        print(("^1[%s]^7 Update available! ^3(Current: %s | Latest: %s)^7"):format(resourceName, localVersion or "unknown", remoteVersion))
                        print(("^2Download the latest version here:^7 %s"):format(repoUrl))
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
