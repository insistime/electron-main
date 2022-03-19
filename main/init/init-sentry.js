'use strict';

// q
var q = require('qiao-electron');

// electron config
var config = require('../electron.config.json');

// init
q.initSentry(config.sentry);