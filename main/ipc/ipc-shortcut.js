'use strict';

// electron
const { ipcMain, globalShortcut } = require('electron');

// const
const { IPC_SHORTCUT_GLOBAL } = require('../_util/constant.js');

// callbacks
const { shortcutShowMenu } = require('../shortcut/shortcut.js');

// ipc shortcut global
ipcMain.handle(IPC_SHORTCUT_GLOBAL, (event, ...args) => {
    // check
    const shortcutKey = args[0];
    const shortcutCallbackName = args[1];
    if(!shortcutKey || !shortcutCallbackName) return;

    // callback
    let callback;
    if(shortcutCallbackName == 'shortcutShowMenu') callback = shortcutShowMenu;

    // check
    if(!callback) return;

    // res
    return globalShortcut.register(shortcutKey, callback);
});