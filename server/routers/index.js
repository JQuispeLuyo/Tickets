const express = require('express');
const app = express();

app.use(require('./home'));
app.use(require('./escritorio'));
app.use(require('./ticket'));
app.use(require('./login'));
app.use(require('./404'));

module.exports = app;