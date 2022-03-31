'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { log } = require('qiao-electron');
const { toIndexWindow } = require('../preload/preload.js');

// electron
contextBridge.exposeInMainWorld('electron', {
    log,
    toIndexWindow
});