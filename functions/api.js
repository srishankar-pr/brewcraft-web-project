const express = require('express');
const serverless = require('serverless-http');
const app = require('../server'); // Import the app from your existing server file

module.exports.handler = serverless(app);
