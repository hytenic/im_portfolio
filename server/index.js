const express = require("express");
const app = express();

const port = 3000;
const ip = "127.0.0.1";
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// app.get('/aboutMe', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   });

let handler = function () {
    console.log("Server is running now");
};

// app.use(express.static('public'));
// app.use('/aboutMe', express.static('public'));


app.listen(port, ip, handler);

//module.exports = server;
const defaultCorsHeaders = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10, // Seconds.
};