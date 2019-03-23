const admin = require('firebase-admin');
const restApi = require('./api/v1/main');

admin.initializeApp();

module.exports = {
  ...restApi
};
