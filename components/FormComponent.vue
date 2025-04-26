<template>
    <div class="flex items-center justify-between">
        <input class="border border-solid border-gray-500 rounded-xl px-6 py-3 outline-none w-3/5" type="text" v-model="newTask" placeholder="New task">
        <button class="bg-green-600 px-6 py-3 rounded-xl text-white uppercase text-base font-medium hover:bg-green-800" @click="submitTask">Submit</button>
    </div>
</template>

<script setup>
const newTask = ref('')

const emit = defineEmits(['add-task'])

function submitTask() {
    if (newTask.value.trim() !== '') {
        emit('add-task', newTask.value)
        newTask.value = ''
    }
}
</script>