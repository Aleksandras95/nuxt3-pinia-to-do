<template>
    <div class="border border-solid border-gray-500 rounded-3xl p-5 max-w-[600px] mx-auto">
        <FormComponent @add-task="handleAddTask" />

        <div class="mt-5 border border-solid border-gray-500 rounded-3xl p-5">
            <ul v-if="taskStore.tasks.length > 0">
                <li v-for="task in taskStore.tasks" :key="task.id" class="flex items-center justify-between">
                    {{ task.text }}
                    <button class="text-red-500 text-base" @click="handleRemoveTask(task.id)">X</button>
                </li>
            </ul>
            <div v-else>No tasks</div>
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore()

taskStore.loadTasks()

function handleAddTask(taskText) {
    taskStore.addTask(taskText)
}

function handleRemoveTask(taskId) {
    taskStore.removeTask(taskId)
}
</script>