'use strict';

// electron
const { contextBridge } = require('electron');

// preload
const { 
    darkModeChangeIPC,
    logIPC,
    lsAllIPC, 
    lsGetIPC, 
    lsSetIPC, 
    lsDelIPC,
    shellOpenUrlIPC,
    shortcutGlobalIPC,
} = require('qiao-electron');

// electron
contextBridge.exposeInMainWorld('electron', {
    darkModeChangeIPC,
    logIPC,
    lsAllIPC, 
    lsGetIPC, 
    lsSetIPC, 
    lsDelIPC,
    shellOpenUrlIPC,
    shortcutGlobalIPC,
});