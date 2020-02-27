'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/download', (req, res) => {
    res.download("./cv.pdf");
})

module.exports.handler = serverless(app);