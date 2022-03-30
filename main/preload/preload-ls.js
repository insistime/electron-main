'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { IPC_LS_ALL, IPC_LS_GET, IPC_LS_SET, IPC_LS_DEL } = require('../_util/constant.js');

/**
 * lsAll
 */
exports.lsAll = async () => {
    return await ipcRenderer.invoke(IPC_LS_ALL);
};

/**
 * lsGet
 */
exports.lsGet = async (key) => {
    return await ipcRenderer.invoke(IPC_LS_GET, key);
};

/**
 * lsSet
 */
exports.lsSet = async (key, value) => {
    return await ipcRenderer.invoke(IPC_LS_SET, {key, value});
};

/**
 * lsDel
 */
exports.lsDel = async (key) => {
    return await ipcRenderer.invoke(IPC_LS_DEL, key);
};