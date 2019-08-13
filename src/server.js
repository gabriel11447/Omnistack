const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://gabriel11447:12ab12@cluster0-ses9o.mongodb.net/omnistack?retryWrites=true&w=majority', { 
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);