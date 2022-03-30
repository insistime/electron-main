'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { IPC_LOG } = require('../_util/constant.js');

/**
 * log
 * @param {*} msg 
 * @param {*} type info,warn,error
 */
exports.log = (msg, type) => {
    ipcRenderer.send(IPC_LOG, {msg, type});
};