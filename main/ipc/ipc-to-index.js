'use strict';

// q
var q = require('qiao-electron');

// ipcMain
var ipcMain = require('electron').ipcMain;

// win
var win = require('../window/window.js');

// ipc to index
ipcMain.on('ipc-to-index', function(event, arg){
  var wins = q.window.getAllWindows();
  if(!wins || !wins.length) return;

  var loginWindow = wins[0];
  if(!loginWindow) return;

  loginWindow.close();
  win.openIndexWindow();
});