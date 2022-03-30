'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { 
    log,
    shellOpenUrl
} = require('../preload/preload.js');

// electron
contextBridge.exposeInMainWorld('electron', {
    log,
    shellOpenUrl
});