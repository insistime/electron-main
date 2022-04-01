'use strict';

// electron
const { app, BrowserWindow } = require('electron');

// q
const { ls } = require('qiao-electron');

// win
const win = require('../window/window.js');

// activate
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) win.openLoginWindow();
});

// open window
const openWindow = () => {
    const _ls = ls();
    
    const loginName = _ls.config('loginName');
    if(loginName){
        win.openIndexWindow();
    }else{
        win.openLoginWindow();
    }
};
openWindow();