'use strict';

// app
var app = require('electron').app;

// q
var q = require('qiao-electron');

// win
var win = require('../window/window.js');

// create window
win.createLoginWindow();

// activate
app.on('activate', function(){
    if(q.window.getAllWindows().length === 0) win.createLoginWindow();
});