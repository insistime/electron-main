'use strict';

// electron
var electron = require('electron');
var q = require('qiao-electron');

// app
var app = electron.app;

// win
var win = require('../window.js');

// sentry inti
require('./init-sentry.js');

// app init
app.whenReady().then(() => {
  // set application menu
  q.setApplicationMenu();
  
  // set about version
  q.setAboutVersion(require('../../package.json').version);

  // create window
  win.createLoginWindow();

  // activate
  app.on('activate', function(){
    if(q.window.getAllWindows().length === 0) win.createLoginWindow();
  });
});