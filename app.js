const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();

// * * * Here we import our routes from the sample.js file of the routes directory
const sampleRoutes = require('./routes/sample');

// * * * Here we add the body parser
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// * * * Here we set the headers to avoid CORS errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// * * * Here we use the routes from the sample.js file in the route directory
// * * * All routes of this file will go through /sample
app.use('/sample', sampleRoutes);

// * * * Here is the code to handle paths in production mode
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT);
