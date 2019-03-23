const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const filesRouter = require('./routes/filesRouter');
//const cvRouter = require('./routes/cv');
const cors = require('cors');

const main = express();
const mainRoute = '/api/v1';

main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.use(cors({ origin: true }));

main.use(mainRoute + '/files', filesRouter);
//main.use(mainRoute + '/cv', cvRouter);

exports.restApi = functions.https.onRequest(main);
