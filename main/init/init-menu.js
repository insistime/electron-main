'use strict';

// q
var q = require('qiao-electron');

// version
var version = require('../../package.json').version;

// set application menu
q.setApplicationMenu();

// set about version
q.setAboutVersion(version);