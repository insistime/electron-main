'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { log, toIndexWindow } = require('../preload/preload.js');

// electron
contextBridge.exposeInMainWorld('electron', {
    log,
    toIndexWindow
});