const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors');

const port = 3000;
const ip = "127.0.0.1";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let handler = function () {
    console.log("Server is running now");
};

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => { 
    res.status(200).send();
});

app.get('/aboutMe', (req, res) => {
    res.status(200).send();
});


app.use(function (req, res) {
    res.status(404).send('404 ERROR');
});

app.listen(port, ip, handler);

//module.exports = server;
const defaultCorsHeaders = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10, // Seconds.
};