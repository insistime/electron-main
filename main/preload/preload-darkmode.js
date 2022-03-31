'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { IPC_DARKMODE_CHANGE } = require('../_util/constant.js');

/**
 * darkModeChange
 */
exports.darkModeChange = (callback) => {
    ipcRenderer.on(IPC_DARKMODE_CHANGE, (e, msg) => {
        if(callback) callback(msg);
    });
};