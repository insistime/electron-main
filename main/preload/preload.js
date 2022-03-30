'use strict';

// log
const { log } = require('./preload-log.js');

// app
const { getAppVersion } = require('./preload-app.js');

// window
const { toIndexWindow } = require('./preload-window.js');

// exports log
exports.log = log;

// exports app
exports.getAppVersion = getAppVersion;

// exports window
exports.toIndexWindow = toIndexWindow;