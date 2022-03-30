'use strict';

// ipcMain
const { ipcMain, shell } = require('electron');

// const
const { IPC_OPEN_URL } = require('../_util/constant.js');

// ipc open url
ipcMain.on(IPC_OPEN_URL, (event, arg) => {
  shell.openExternal(arg, { activate:true });
});