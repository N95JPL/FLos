const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    actionClimate: (msg) => ipcRenderer.send('actionClimate', msg),
    actionBrightness: (msg) => ipcRenderer.send('actionBrightness', msg),
    actionSettings: (msg) => ipcRenderer.send('actionSettings', msg),
    dataFull: (msg) => ipcRenderer.send('dataFull', msg),
    sendLog: (msg) => ipcRenderer.send('sendLog', msg),
    canRecorder: (msg) => ipcRenderer.send('canRecorder', msg),
    close: (msg) => ipcRenderer.send('close', msg),
    onMediumSpeed: (callback) => ipcRenderer.on('mediumSpeed', callback),
    onFadeOut: (callback) => ipcRenderer.on('fadeOut', callback)
})