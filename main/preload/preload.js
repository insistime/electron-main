'use strict';

// log
const { log } = require('./preload-log.js');

// ls
const { lsAll, lsGet, lsSet, lsDel } = require('./preload-ls.js');

// app
const { getAppVersion } = require('./preload-app.js');

// shell
const { openUrl } = require('./preload-shell.js');

// window
const { toIndexWindow } = require('./preload-window.js');

// exports log
exports.log = log;

// exports ls
exports.lsAll = lsAll;
exports.lsGet = lsGet;
exports.lsSet = lsSet;
exports.lsDel = lsDel;

// exports app
exports.getAppVersion = getAppVersion;

// exports shell
exports.openUrl = openUrl;

// exports window
exports.toIndexWindow = toIndexWindow;