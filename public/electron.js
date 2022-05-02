require("v8-compile-cache");
const { ipcMain, app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;
process.on("uncaughtException", (error) => {
  console.log("[ERROR]", error);
});
function createWindow() {
  mainWindow = new BrowserWindow({
    show: true,
    backgroundColor: "#252525",
    frame: false,
    kiosk: true,
    movable: false,
    width: 800,
    maxWidth: 800,
    minWidth: 800,
    height: 480,
    center: true,
    transparent: true,
    fullscreen: true,
    maxHeight: 480,
    minHeight: 480,
    webPreferences: {
      nativeWindowOpen: true,
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadURL(
    `file://${path.join(__dirname, "../build/splashScreen.html")}`
  );
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
  mainWindow.on("unresponsive", () => {
    console.log("Load time excessive");
  });
  mainWindow.once("ready-to-show", () => {
    require("./server")(mainWindow, isDev);
    mainWindow.webContents.send("fadeOut", "now");
    setTimeout(() => {
      mainWindow.loadURL(
        isDev
          ? "http://localhost:3000"
          : `file://${path.join(__dirname, "../build/index.html")}`
      );
    }, 1000);
  });
}

ipcMain.on("close", (event, msg) => {
  app.quit();
});
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
