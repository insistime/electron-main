'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { 
    lsAll, lsGet, lsSet, lsDel,
    shellOpenUrl,
} = require('qiao-electron');
const { log } = require('../preload/preload.js');

// electron
contextBridge.exposeInMainWorld('electron', {
    log,
    lsAll, lsGet, lsSet, lsDel,
    shellOpenUrl,
});