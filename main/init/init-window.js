'use strict';

// app
const { app } = require('electron');

// q
const { window } = require('qiao-electron');

// ls
const ls = require('../_util/config.js');

// win
const win = require('../window/window.js');

// activate
app.on('activate', () => {
    if(window.getAllWindows().length === 0) win.openLoginWindow();
});

// open window
const openWindow = () => {
    const loginName = ls.config('loginName');
    if(loginName){
        win.openIndexWindow();
    }else{
        win.openLoginWindow();
    }
};
openWindow();