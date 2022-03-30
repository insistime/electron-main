'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { IPC_OPEN_URL } = require('../_util/constant.js');

/**
 * openUrl
 * @param {*} url 
 */
exports.openUrl = (url) => {
    ipcRenderer.send(IPC_OPEN_URL, url);
};