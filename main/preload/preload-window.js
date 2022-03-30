'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { IPC_TO_INDEX_WINDOW } = require('../_util/constant.js');

/**
 * toIndexWindow
 */
exports.toIndexWindow = () => {
    ipcRenderer.send(IPC_TO_INDEX_WINDOW);
};