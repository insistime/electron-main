'use strict';

// app
const { app } = require('electron');

// q
const { window } = require('qiao-electron');

// win
const win = require('../window/window.js');

// open window
win.openLoginWindow();

// activate
app.on('activate', () => {
    if(window.getAllWindows().length === 0) win.openLoginWindow();
});