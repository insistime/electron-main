// sentry
var sentry = require('@sentry/electron');

// config
var config = require('../electron.config.json');

/**
 * sentry init
 */
sentry.init({
  dsn: config.sentry
});