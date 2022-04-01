'use strict';

// path
const path = require('path');

// qiao-electron
const { windowOpenByFile, windowOpenByUrl } = require('qiao-electron');

// const
const { LOCAL_URL } = require('../_util/constant.js');

/**
 * open index window
 * @returns 
 */
module.exports = () => {
  // urls
  const indexUrl = `${LOCAL_URL}/index.html`;
  const indexFilePath = path.resolve(__dirname, '../../renderer/index.html');
  const indexPreloadPath = path.resolve(__dirname, './index-preload.js');

  // options
  const options = {
    width: 600,
    height: 800,
    center: true,
    webPreferences: {
      preload: indexPreloadPath
    }
  };

  // dev
  const env = (process.argv && process.argv.length > 2) ? process.argv[2] : null;
  if(env == 'dev') return windowOpenByUrl(indexUrl, options);

  // file
  options.show =false;
  return windowOpenByFile(indexFilePath, options);
};