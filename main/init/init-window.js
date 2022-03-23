'use strict';

// app
var app = require('electron').app;

// q
var q = require('qiao-electron');

// win
var win = require('../window/window.js');

// open window
win.openLoginWindow();

// activate
app.on('activate', function(){
    if(q.window.getAllWindows().length === 0) win.openLoginWindow();
});