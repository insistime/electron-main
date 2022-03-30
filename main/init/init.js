'use strict';

// app
const { app } = require('electron');

// q
const { lsIPCInit, shellIPCInit } = require('qiao-electron');

// init ls
lsIPCInit();

// init shell
shellIPCInit();

// init menu
require('./init-menu.js');

// init ipc
require('../ipc/ipc.js');

// app init
app.whenReady().then(() => {
  require('./init-window.js');
});