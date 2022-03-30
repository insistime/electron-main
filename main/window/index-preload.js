'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { shellOpenUrl } = require('qiao-electron');
const { log } = require('../preload/preload.js');

// electron
contextBridge.exposeInMainWorld('electron', {
    log,
    shellOpenUrl
});