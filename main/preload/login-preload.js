'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { log, toIndex } = require('./preload');

// electron
contextBridge.exposeInMainWorld('electron', {
    log,
    toIndex
});