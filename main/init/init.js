'use strict';

// app
var app = require('electron').app;

// init sentry
require('./init-sentry.js');

// init log
require('./init-log.js');

// init menu
require('./init-menu.js');

// init ipc
require('../ipc/ipc.js');

// app init
app.whenReady().then(() => {
  require('./init-window.js');
});