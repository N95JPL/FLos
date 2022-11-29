const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    actionClimate: (msg) => ipcRenderer.send('actionClimate', msg),
    actionBrightness: (msg) => ipcRenderer.send('actionBrightness', msg),
    actionSettings: (msg) => ipcRenderer.send('actionSettings', msg),
    dataFull: (msg) => ipcRenderer.send('dataFull', msg),
    onMediumSpeed: (callback) => ipcRenderer.on('mediumSpeed', callback),
    onFadeOut: (callback) => ipcRenderer.on('fadeOut', callback)
})