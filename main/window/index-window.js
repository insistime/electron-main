'use strict';

// path
const path = require('path');

// qiao-electron
const { openWindowByFile } = require('qiao-electron');

/**
 * open index window
 * @returns 
 */
module.exports = function(){
  const indexFilePath = path.resolve(__dirname, '../../renderer/index.html');
  const indexPreloadPath = path.resolve(__dirname, '../preload/index-preload.js');

  const options = {
    show: false,
    width: 600,
    height: 800,
    center: true,
    backgroundColor: '#000',
    webPreferences: {
      preload: indexPreloadPath
    }
  };

  return openWindowByFile(indexFilePath, options);
};