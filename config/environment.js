'use strict';
require('dotenv')

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'articles',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
      },
      apiUrl: process.env.API_URL,
    },
    apiUrl: process.env.API_URL,
    APP: {
      baseURL: 'http://localhost:4200',
      apiUrl: process.env.API_URL,
    },
    fastboot: {
      hostWhitelist: [
        'http://127.0.0.1:4200',
        'http://localhost',
        'http://localhost:7784',
      ]
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
