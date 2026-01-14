const mongoose = require('mongoose');

const TrackerSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  deviceId: { type: String },
  steps: { type: Number, default: 0 },
  calories: { type: Number, default: 0 },
  metadata: { type: Object },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tracker', TrackerSchema);
