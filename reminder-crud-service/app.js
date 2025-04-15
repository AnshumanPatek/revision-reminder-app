const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes will be imported here
// app.use('/api/reminders', require('./routes/reminderRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Reminder CRUD Service is running on port ${PORT}`);
}); 