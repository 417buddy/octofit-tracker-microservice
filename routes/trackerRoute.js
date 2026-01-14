const express = require('express');
const router = express.Router();
const trackerController = require('../controllers/trackerController');

// POST /api/track -> create a tracking record
router.post('/', trackerController.createTrackingRecord);

// GET /api/track/:id -> get a tracking record by id
router.get('/:id', trackerController.getTrackingRecord);

module.exports = router;
