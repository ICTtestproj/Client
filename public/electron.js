"use strict";
exports.__esModule = true;
var path = require("path");
var url = require("url");
var electron_1 = require("electron");
var isDev = require("electron-is-dev");
var baseUrl = "http://localhost:1212";
var mainWindow;
function createMainWindow() {
  mainWindow = new electron_1.BrowserWindow({
    width: 450,
    height: 800,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  var mainWindowUrl = url.format({
    pathname: path.join(__dirname, "./index.html"),
    protocol: "file"
  });
  mainWindow.loadURL(isDev ? baseUrl : mainWindowUrl);
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
  mainWindow.setMenuBarVisibility(false);
}
electron_1.app.on("ready", function() {
  createMainWindow();
});
electron_1.app.on("window-all-closed", function() {
  electron_1.app.quit();
});
electron_1.app.on("activate", function() {
  if (mainWindow === null) {
    createMainWindow();
  }
});
