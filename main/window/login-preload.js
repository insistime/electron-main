'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { logIPC } = require('qiao-electron');
const { toIndexWindow } = require('../preload/preload.js');

// electron
contextBridge.exposeInMainWorld('electron', {
    logIPC,
    toIndexWindow
});