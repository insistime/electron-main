'use strict';

// path
const path = require('path');

// qiao-electron
const { openWindowByFile } = require('qiao-electron');

/**
 * open login window
 * @returns 
 */
module.exports = function(){
  const loginFilePath = path.resolve(__dirname, '../../renderer/login.html');
  const loginPreloadPath = path.resolve(__dirname, '../preload/login-preload.js');

  const options = {
    show: false,
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

  return openWindowByFile(loginFilePath, options);
};