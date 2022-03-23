'use strict';

// path
var path = require('path');

// qiao-electron
var q = require('qiao-electron');

/**
 * open login window
 * @returns 
 */
module.exports = function(){
  var loginFilePath = path.resolve(__dirname, '../../renderer/login.html');

  var options = {
    show: false,
    width: 335,
    height: 520,
    center: true,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    backgroundColor: '#000',
    titleBarStyle: 'hiddenInset',
  };

  return q.openWindowByFile(loginFilePath, options, true);
};