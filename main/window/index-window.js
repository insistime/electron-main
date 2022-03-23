'use strict';

// path
var path = require('path');

// qiao-electron
var q = require('qiao-electron');

/**
 * open index window
 * @returns 
 */
module.exports = function(){
  var indexFilePath = path.resolve(__dirname, '../../renderer/index.html');

  var options = {
    show: false,
    width: 600,
    height: 800,
    center: true,
    backgroundColor: '#000'
  };

  return q.openWindowByFile(indexFilePath, options, true);
};