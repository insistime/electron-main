// sentry
var sentry = require('@sentry/electron');

// config
var config = require('../config.json');

/**
 * sentry init
 */
sentry.init({
  dsn: config.sentry
});