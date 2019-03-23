const express = require('express');
const { uploadImage } = require('../services/filesService');

const app = express();

// POST Routes
app.post('/image', (req, res) => {
  uploadImage(req.body);
  res.json(req.body);
});

export = app;
