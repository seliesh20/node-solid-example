const taskService = require('../services/TaskService');

class TaskController {
    static async getTask(req, res) {
        try {
            const task = await taskService.getTask(req.params.id);
            if (!task) return res.status(404).send('Task not found');
            res.json(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async createTask(req, res) {
        try {
            const task = await taskService.createTask(req.body);
            res.status(201).json(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async updateTask(req, res) {
        try {
            const task = await taskService.updateTask(req.params.id, req.body);
            if (!task) return res.status(404).send('Task not found');
            res.json(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async deleteTask(req, res) {
        try {
            const task = await taskService.deleteTask(req.params.id);
            if (!task) return res.status(404).send('Task not found');
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllTasks(req, res) {
        try {
            const tasks = await taskService.getAllTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = TaskController;
