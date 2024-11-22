const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const taskRoutes = require('./src/routes/');
const TaskRepository = require('./src/repositories/TaskRepository');
const TaskService = require('./src/services/TaskService');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Initialize MongoDB connection
mongoose.connect('mongodb://localhost:27017/solid-task-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Initialize services and controllers
const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);

// Use routes
app.use('/api', taskRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
