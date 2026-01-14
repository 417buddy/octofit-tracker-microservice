const express = require('express');
const router = express.Router();

const trackerRouter = require('./trackerRoute');

router.use('/track', trackerRouter);

module.exports = router;
