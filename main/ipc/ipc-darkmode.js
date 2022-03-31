'use strict';

// electron
const { BrowserWindow, nativeTheme } = require('electron');

// const
const { IPC_DARKMODE_CHANGE } = require('../_util/constant.js');

// ipc darkmode change
nativeTheme.on('updated', () => {
  const wins = BrowserWindow.getAllWindows();
  for(let win of wins){
    win.webContents.send(IPC_DARKMODE_CHANGE, nativeTheme.shouldUseDarkColors);
  }
});