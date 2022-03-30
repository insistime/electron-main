'use strict';

// electron
const { app } = require('electron');

// window all closed
app.on('window-all-closed', function(){
  if (process.platform !== 'darwin') app.quit();
});