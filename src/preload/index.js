import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  actionClimate: (msg) => ipcRenderer.send('actionClimate', msg),
  actionBrightness: (msg) => ipcRenderer.send('actionBrightness', msg),
  actionSettings: (msg) => ipcRenderer.send('actionSettings', msg),
  dataFull: (msg) => ipcRenderer.send('dataFull', msg),
  vehicleInfo: (msg) => ipcRenderer.send('vehicleInfo', msg),
  canRecorder: (msg) => ipcRenderer.send('canRecorder', msg),
  close: (msg) => ipcRenderer.send('close', msg),
  onEntertainmentBus: (callback) => ipcRenderer.on('entertainmentBus', callback),
  onMediumSpeed: (callback) => ipcRenderer.on('mediumSpeed', callback),
  onVehicleInfo: (callback) => ipcRenderer.on('vehicleInfo', callback),
  onFadeOut: (callback) => ipcRenderer.on('fadeOut', callback)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
