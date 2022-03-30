'use strict';

// path
const path = require('path');

// electron
const { app } = require('electron');

// q
const { c } = require('qiao-config');

// get config
const getConfig = () => {
    const userDataPath = app.getPath('userData');
    const configPath = path.resolve(userDataPath, './electron.config');
    const config = c(configPath);

    return config;
};

// export
module.exports = getConfig();