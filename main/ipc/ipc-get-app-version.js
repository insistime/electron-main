'use strict';

// ipcMain
const { ipcMain } = require('electron');

// version
const { version } = require('../../package.json');

// ipc get app version
ipcMain.handle('ipc-get-app-version', (event, ...args) => {
  return version;
});