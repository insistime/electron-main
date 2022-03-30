'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const IPC_LOG = 'ipc-log';
const IPC_TO_INDEX = 'ipc-to-index';
const IPC_GET_APP_VERSION = 'ipc-get-app-version';


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