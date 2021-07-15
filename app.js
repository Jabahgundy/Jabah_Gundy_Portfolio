'use strict'

const http = require('http')

const hostname = 'localhost';
const port = 3000;

const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const aboutController = require('./routes/about');
const projectController = require('./routes/projects');
const serviceController = require('./routes/services');

app.use('/', rootController);
app.use('/about', aboutController);
app.use('/projects', projectController);
app.use('/services', serviceController);