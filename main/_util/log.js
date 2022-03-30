'use strict';

// qiao-log
const { getLogger } = require('qiao-log');

// Logger
const Logger = getLogger('electron.log');

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
exports.error = (msg, type) => {
    let _type = type || 'info';
    
    if(_type == 'info')     Logger.info(msg);
    if(_type == 'warn')     Logger.warn(msg);
    if(_type == 'error')    Logger.error(msg);
};