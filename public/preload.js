const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  actionClimate: (msg) => ipcRenderer.send("actionClimate", msg),
  actionBrightness: (msg) => ipcRenderer.send("actionBrightness", msg),
  actionSettings: (msg) => ipcRenderer.send("actionSettings", msg),
  dataFull: (msg) => ipcRenderer.send("dataFull", msg),
  vehicleInfo: (msg) => ipcRenderer.send("vehicleInfo", msg),
  canRecorder: (msg) => ipcRenderer.send("canRecorder", msg),
  close: (msg) => ipcRenderer.send("close", msg),
  onEntertainmentBus: (callback) => ipcRenderer.on("entertainmentBus", callback),
  onMediumSpeed: (callback) => ipcRenderer.on("mediumSpeed", callback),
  onVehicleInfo: (callback) => ipcRenderer.on("vehicleInfo", callback),
  onFadeOut: (callback) => ipcRenderer.on("fadeOut", callback),
});
