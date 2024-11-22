class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    async getTask(id) {
        return this.taskRepository.findById(id);
    }

    async createTask(taskData) {
        return this.taskRepository.create(taskData);
    }

    async updateTask(id, taskData) {
        return this.taskRepository.update(id, taskData);
    }

    async deleteTask(id) {
        return this.taskRepository.delete(id);
    }

    async getAllTasks() {
        return this.taskRepository.findAll();
    }
}

module.exports = TaskService;