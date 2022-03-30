'use strict';

// q
const { window } = require('qiao-electron');

// ipcMain
const { ipcMain } = require('electron');

// win
const win = require('../window/window.js');

// const
const { IPC_TO_INDEX_WINDOW } = require('../_util/constant.js');

// ipc to index
ipcMain.on(IPC_TO_INDEX_WINDOW, (event, arg) => {
  const wins = window.getAllWindows();
  if(!wins || !wins.length) return;

  const loginWindow = wins[0];
  if(!loginWindow) return;

  loginWindow.close();
  win.openIndexWindow();
});