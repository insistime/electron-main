'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { IPC_GET_APP_VERSION } = require('../_util/constant.js');

/**
 * getAppVersion
 * @returns version
 */
exports.getAppVersion = async () => {
    return await ipcRenderer.invoke(IPC_GET_APP_VERSION);
};