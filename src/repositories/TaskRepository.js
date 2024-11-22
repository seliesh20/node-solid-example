const Task = require('./task');

class TaskRepository {
    async findById(id) {
        return Task.findById(id);
    }

    async create(taskData) {
        const task = new Task(taskData);
        return task.save();
    }

    async update(id, taskData) {
        return Task.findByIdAndUpdate(id, taskData, { new: true });
    }

    async delete(id) {
        return Task.findByIdAndDelete(id);
    }

    async findAll() {
        return Task.find();
    }
}

module.exports = TaskRepository;
