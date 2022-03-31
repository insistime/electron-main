'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { 
    log,
    lsAll, lsGet, lsSet, lsDel,
    shellOpenUrl,
    shortcutGlobal,
} = require('qiao-electron');
const { darkModeChange } = require('../preload/preload.js');

// electron
contextBridge.exposeInMainWorld('electron', {
    darkModeChange,
    log,
    lsAll, lsGet, lsSet, lsDel,
    shellOpenUrl,
    shortcutGlobal,
});