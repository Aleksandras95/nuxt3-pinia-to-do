import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(taskText) {
      if (taskText.trim() !== '') {
        this.tasks.push({ id: Date.now(), text: taskText })
        this.saveTasks()
      }
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
      this.saveTasks()
    },
    saveTasks() {
        if (process.client) {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
    },
    loadTasks() {
        if (process.client) {
            const tasksFromStorage = localStorage.getItem('tasks')
        if (tasksFromStorage) {
            this.tasks = JSON.parse(tasksFromStorage)
        }
        }
    }
  }
})
