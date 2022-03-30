'use strict';

// ipcMain
const { ipcMain } = require('electron');

// ls
const ls = require('../_util/ls.js');

// const
const { IPC_LS_ALL, IPC_LS_GET, IPC_LS_SET, IPC_LS_DEL } = require('../_util/constant.js');

// ipc ls all
ipcMain.handle(IPC_LS_ALL, (event, args) => {
  return ls.all();
});

// ipc ls get
ipcMain.handle(IPC_LS_GET, (event, args) => {
  return ls.config(args);
});

// ipc ls set
ipcMain.handle(IPC_LS_SET, (event, args) => {
  // check
  if(!args || !args.key || !args.value) return;

  // set
  ls.config(args.key, args.value);

  // return
  return true;
});

// ipc ls del
ipcMain.handle(IPC_LS_DEL, (event, args) => {
  // del
  ls.config(args, null);

  //return
  return true;
});