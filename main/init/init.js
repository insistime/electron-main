'use strict';

// q
var q = require('qiao-electron');

// app
var app = require('electron').app;

// win
var win = require('../window.js');

// init sentry
require('./init-sentry.js');

// init log
require('./init-log.js');

// init menu
require('./init-menu.js');

// app init
app.whenReady().then(() => {
  // create window
  win.createLoginWindow();

  // activate
  app.on('activate', function(){
    if(q.window.getAllWindows().length === 0) win.createLoginWindow();
  });
});