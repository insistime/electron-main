'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { log } = require('./preload');

// electron
contextBridge.exposeInMainWorld('electron', {
    log
});