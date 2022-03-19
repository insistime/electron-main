'use strict';

// q
var q = require('qiao-electron');

// set application menu
q.setApplicationMenu();

// set about version
q.setAboutVersion(require('../../package.json').version);