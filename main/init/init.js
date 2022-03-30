'use strict';

// app
const { app } = require('electron');

// init menu
require('./init-menu.js');

// init shell
require('./init-shell.js');

// init ipc
require('../ipc/ipc.js');

// app init
app.whenReady().then(() => {
  require('./init-window.js');
});