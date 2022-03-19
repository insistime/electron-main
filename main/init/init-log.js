'use strict';

// q
var q = require('qiao-electron');

// electron config
var config = require('../electron.config.js');

// init
q.initIPCLog(config.ipcLogChannel);