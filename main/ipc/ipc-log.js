'use strict';

// ipcMain
const { ipcMain } = require('electron');

// log
const { log } = require('../_util/log.js');

// const
const { IPC_LOG } = require('../_util/constant.js');

// ipc log
ipcMain.on(IPC_LOG, (event, arg) => {
  // check
  if(!arg || !arg.msg) return;

  // log
  log(arg.msg, arg.type);
});