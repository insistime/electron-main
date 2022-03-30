'use strict';

// ipcMain
const { ipcMain } = require('electron');

// version
const { version } = require('../../package.json');

// const
const { IPC_GET_APP_VERSION } = require('../_util/constant.js');

// ipc get app version
ipcMain.handle(IPC_GET_APP_VERSION, (event, ...args) => {
  return version;
});