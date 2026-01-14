const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit-tracker';
  await mongoose.connect(mongoUrl);
  console.log('Connected to MongoDB');
};

module.exports = connectDB;
