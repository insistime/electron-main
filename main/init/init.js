'use strict';

// app
const { app } = require('electron');

// q
const { shellIPCInit } = require('qiao-electron');

// init
shellIPCInit();

// init menu
require('./init-menu.js');

// init ipc
require('../ipc/ipc.js');

// app init
app.whenReady().then(() => {
  require('./init-window.js');
});