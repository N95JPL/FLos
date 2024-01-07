"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const api = {
  actionClimate: (msg) => electron.ipcRenderer.send("actionClimate", msg),
  actionBrightness: (msg) => electron.ipcRenderer.send("actionBrightness", msg),
  actionSettings: (msg) => electron.ipcRenderer.send("actionSettings", msg),
  dataFull: (msg) => electron.ipcRenderer.send("dataFull", msg),
  vehicleInfo: (msg) => electron.ipcRenderer.send("vehicleInfo", msg),
  canRecorder: (msg) => electron.ipcRenderer.send("canRecorder", msg),
  close: (msg) => electron.ipcRenderer.send("close", msg),
  onEntertainmentBus: (callback) => electron.ipcRenderer.on("entertainmentBus", callback),
  onMediumSpeed: (callback) => electron.ipcRenderer.on("mediumSpeed", callback),
  onVehicleInfo: (callback) => electron.ipcRenderer.on("vehicleInfo", callback),
  onFadeOut: (callback) => electron.ipcRenderer.on("fadeOut", callback)
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}
