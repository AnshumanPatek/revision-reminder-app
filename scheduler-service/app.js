const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { Queue } = require('bullmq');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Redis connection configuration
const redisConfig = {
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
  }
};

// Create reminder queue
const reminderQueue = new Queue('reminders', { connection: redisConfig });

// Routes will be imported here
// app.use('/api/scheduler', require('./routes/schedulerRoutes'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Scheduler Service is running on port ${PORT}`);
}); 