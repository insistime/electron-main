'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { 
    log,
    openUrl
} = require('../preload/preload.js');

// electron
contextBridge.exposeInMainWorld('electron', {
    log,
    openUrl
});