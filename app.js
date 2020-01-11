const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

const sampleRoutes = require('./routes/sample');

app.use(sampleRoutes);

app.listen(PORT);
