const Tracker = require('../models/Tracker');

exports.createRecord = async (payload) => {
  // Basic validation / normalization may go here
  const rec = new Tracker(payload);
  await rec.save();
  return rec.toObject();
};

exports.getById = async (id) => {
  return Tracker.findById(id).lean();
};
