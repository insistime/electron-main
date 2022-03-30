'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { log } = require('../preload/preload.js');

// electron
contextBridge.exposeInMainWorld('electron', {
    log
});