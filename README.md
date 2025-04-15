# Revision Reminder App

A microservices-based application for managing revision reminders and scheduling notifications.

## Architecture

The application consists of two main services:

1. **Reminder CRUD Service**: Handles the creation, reading, updating, and deletion of reminders
2. **Scheduler Service**: Manages the scheduling and delivery of reminder notifications

## Services

### Reminder CRUD Service
- Port: 3000
- Handles reminder management
- Uses MongoDB for data persistence

### Scheduler Service
- Port: 3001
- Manages reminder scheduling
- Uses Redis and BullMQ for job queues

## Prerequisites

- Docker and Docker Compose
- Node.js (for local development)

## Getting Started

1. Clone the repository
2. Start the services using Docker Compose:
   ```bash
   docker-compose up --build
   ```

## Development

To run services individually for development:

### Reminder CRUD Service
```bash
cd reminder-crud-service
npm install
npm run dev
```

### Scheduler Service
```bash
cd scheduler-service
npm install
npm run dev
```

## Environment Variables

### Reminder CRUD Service
- `PORT`: Service port (default: 3000)
- `MONGODB_URI`: MongoDB connection string

### Scheduler Service
- `PORT`: Service port (default: 3001)
- `REDIS_HOST`: Redis host
- `REDIS_PORT`: Redis port