fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'stumps X Nevera Development'
description 'AG Loading Screen'
version '1.6.7'

loadscreen_manual_shutdown "yes"
loadscreen 'html/index.html'
loadscreen_cursor "yes"

client_script "client.lua"

server_scripts {
    'update_checker.lua'
}

files {
    'html/audio.mp3',
    'html/video.webm',
    'html/index.html',
    'html/config.js',
    'html/assets/js/**',
    'html/assets/css/**',
    'html/assets/img/**',
    'html/images/**'
}