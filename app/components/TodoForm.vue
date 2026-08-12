<template>
  <div class="card">
    <h2>۲. افزودن کار (Todo) برای کاربر</h2>
    <div class="form-group">
      <select v-model="selectedUserId">
        <option value="" disabled>یک کاربر انتخاب کن...</option>
        <option v-for="user in users" :key="user.id" :value="user.id">
          {{ user.name }} (ID: {{ user.id }})
        </option>
      </select>

      <input v-model="todoTitle" type="text" placeholder="عنوان کار..." />
      <button @click="createTodo">افزودن Todo</button>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

// دریافت لیست کاربران از والد به عنوان Prop
defineProps({
  users: { type: Array, default: () => [] },
})

const emit = defineEmits(['todoCreated'])

const selectedUserId = ref('')
const todoTitle = ref('')

const createTodo = async () => {
  if (!selectedUserId.value || !todoTitle.value) {
    return alert('لطفاً هم کاربر را انتخاب کنید و هم عنوان کار را بنویسید!')
  }

  try {
    await $fetch('/api/todos', {
      method: 'POST',
      body: { userId: selectedUserId.value, title: todoTitle.value },
    })

    todoTitle.value = ''
    emit('todoCreated')
  } catch (error) {
    alert('خطا در ثبت Todo!')
  }
}
</script>