'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { IPC_LOG, IPC_TO_INDEX, IPC_GET_APP_VERSION } = require('../_util/constant.js');

/**
 * log
 * @param {*} msg 
 * @param {*} type info,warn,error
 */
exports.log = (msg, type) => {
    ipcRenderer.send(IPC_LOG, {msg, type});
};

/**
 * toIndex
 */
 exports.toIndex = () => {
    ipcRenderer.send(IPC_TO_INDEX);
};

/**
 * getAppVersion
 * @returns version
 */
exports.getAppVersion = async () => {
    return await ipcRenderer.invoke(IPC_GET_APP_VERSION);
};