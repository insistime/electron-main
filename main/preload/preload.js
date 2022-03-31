'use strict';

// window
const { toIndexWindow } = require('./preload-window.js');

// exports window
exports.toIndexWindow = toIndexWindow;

// darkmode
const { darkModeChange } = require('./preload-darkmode.js');

// exports darkmode
exports.darkModeChange = darkModeChange;