'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { 
    darkModeChange,
    log,
    lsAll, lsGet, lsSet, lsDel,
    shellOpenUrl,
    shortcutGlobal,
} = require('qiao-electron');

// electron
contextBridge.exposeInMainWorld('electron', {
    darkModeChange,
    log,
    lsAll, lsGet, lsSet, lsDel,
    shellOpenUrl,
    shortcutGlobal,
});