// *
// *
// * * * Here you can find a sample of a route file
// *
// *

const express = require('express');
const router = express.Router();

const sampleController = require('../controllers/sample');

router.get('/sample', sampleController.getSample);

module.exports = router;
