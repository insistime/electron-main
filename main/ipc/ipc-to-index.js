'use strict';

// q
const { window } = require('qiao-electron');

// ipcMain
const { ipcMain } = require('electron');

// win
const win = require('../window/window.js');

// ipc to index
ipcMain.on('ipc-to-index', (event, arg) => {
  const wins = window.getAllWindows();
  if(!wins || !wins.length) return;

  const loginWindow = wins[0];
  if(!loginWindow) return;

  loginWindow.close();
  win.openIndexWindow();
});