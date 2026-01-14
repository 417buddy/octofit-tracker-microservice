require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => res.json({ ok: true, service: 'octofit-tracker' }));

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  connectDB()
    .then(() => {
      app.listen(PORT, () => console.log(`octofit-tracker listening on ${PORT}`));
    })
    .catch((err) => {
      console.error('Failed to connect to DB', err);
      process.exit(1);
    });
}

module.exports = app;
