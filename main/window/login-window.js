'use strict';

// path
const path = require('path');

// qiao-electron
const { windowOpenByFile, windowOpenByUrl } = require('qiao-electron');

// const
const { LOCAL_URL } = require('../_util/constant.js');

/**
 * open login window
 * @returns 
 */
module.exports = () => {
  // urls
  const loginUrl = `${LOCAL_URL}/login.html`;
  const loginFilePath = path.resolve(__dirname, '../../renderer/login.html');
  const loginPreloadPath = path.resolve(__dirname, './login-preload.js');

  // options
  const options = {
    width: 335,
    height: 520,
    center: true,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    backgroundColor: '#000',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: loginPreloadPath
    }
  };

  // dev
  const env = (process.argv && process.argv.length > 2) ? process.argv[2] : null;
  if(env == 'dev') return windowOpenByUrl(loginUrl, options);

  // file
  options.show =false;
  return windowOpenByFile(loginFilePath, options);
};