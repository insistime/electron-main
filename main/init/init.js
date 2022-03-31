'use strict';

// electron
const { app } = require('electron');

// q
const { 
  appIPCInit, 
  darkModeIPCInit,
  logIPCInit, 
  lsIPCInit, 
  shellIPCInit, 
  shortcutInit 
} = require('qiao-electron');

// version
const { version } = require('../../package.json');

// init app
appIPCInit(version);

// init darkmode
darkModeIPCInit();

// init log
logIPCInit();

// init ls
lsIPCInit();

// init shell
shellIPCInit();

// init shortcut
shortcutInit();

// init menu
require('./init-menu.js');

// init ipc
require('../ipc/ipc.js');

// app init
app.whenReady().then(() => {
  require('./init-window.js');
});