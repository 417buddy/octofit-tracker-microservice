const trackerService = require('../services/trackerService');

exports.createTrackingRecord = async (req, res) => {
  try {
    const payload = req.body;
    const record = await trackerService.createRecord(payload);
    return res.status(201).json({ success: true, data: record });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

exports.getTrackingRecord = async (req, res) => {
  try {
    const id = req.params.id;
    const record = await trackerService.getById(id);
    if (!record) return res.status(404).json({ success: false, message: 'Not found' });
    return res.json({ success: true, data: record });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: err.message });
  }
};
