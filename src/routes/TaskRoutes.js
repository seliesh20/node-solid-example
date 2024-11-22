const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.get('/tasks', TaskController.getAllTasks);
router.get('/tasks/:id', TaskController.getTask);
router.post('/tasks', TaskController.createTask);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;
