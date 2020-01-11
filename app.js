const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sampleRoutes = require('./routes/sample');

app.use(sampleRoutes);

app.listen(PORT);
