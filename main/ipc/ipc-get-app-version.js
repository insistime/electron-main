'use strict';

// ipcMain
var ipcMain = require('electron').ipcMain;

// version
var version = require('../../package.json').version;

// ipc get app version
ipcMain.handle('ipc-get-app-version', function(event, ...args){
  return version;
});