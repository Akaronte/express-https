const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Read SSL certificate and key
const options = {
  key: fs.readFileSync(path.join(__dirname, 'express.key')),
  cert: fs.readFileSync(path.join(__dirname, 'express.crt'))
};

// Create an Express application
const app = express();

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Hello, HTTPS world!');
});

// Create an HTTPS server
https.createServer(options, app).listen(3000, () => {
  console.log('HTTPS server running on port 3000');
});