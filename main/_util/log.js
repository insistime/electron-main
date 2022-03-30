'use strict';

// path
const path = require('path');

// electron
const { app } = require('electron');

// qiao-log
const { getLogger } = require('qiao-log');

// get log path
const getLogPath = () => {
    const logsPath = app.getPath('logs');
    const logPath = path.resolve(logsPath, './electron.log');
    return logPath;
};

// Logger
const logPath = getLogPath();
const Logger = getLogger(logPath);

/**
 * info
 * @param {*} msg 
 */
exports.info = (msg) => {
    Logger.info(msg);
};

/**
 * warn
 * @param {*} msg 
 */
exports.warn = (msg) => {
    Logger.warn(msg);
};

/**
 * error
 * @param {*} msg 
 */
exports.error = (msg) => {
    Logger.error(msg);
};

/**
 * log
 * @param {*} msg 
 * @param {*} type 
 */
exports.log = (msg, type) => {
    let _type = type || 'info';
    
    if(_type == 'info')     Logger.info(msg);
    if(_type == 'warn')     Logger.warn(msg);
    if(_type == 'error')    Logger.error(msg);
};