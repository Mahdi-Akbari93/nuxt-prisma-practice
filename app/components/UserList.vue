<template>
  <div class="card">
    <h2>۳. لیست کاربران و کارها</h2>

    <p v-if="!users?.length">هیچ کاربری در دیتابیس یافت نشد.</p>

    <div v-for="user in users" :key="user.id" class="user-box">
      <!-- هدر کاربر به همراه دکمه حذف کاربر -->
      <div class="user-header">
        <h3>👤 {{ user.name }} <span class="email">({{ user.email }})</span></h3>
        <button class="btn-delete" @click="deleteUser(user.id)">حذف کاربر</button>
      </div>

      <!-- لیست کارهای کاربر -->
      <div class="todo-list">
        <p><strong>کارها:</strong></p>
        <ul v-if="user.todos?.length">
          <li v-for="todo in user.todos" :key="todo.id" class="todo-item">
            <!-- وضعیت خط‌خورده برای کارهای انجام‌شده -->
            <label :class="{ completed: todo.completed }">
              <input
                type="checkbox"
                :checked="todo.completed"
                @change="toggleTodo(todo.id, !todo.completed)"
              />
              {{ todo.title }}
            </label>
            <button class="btn-delete-sm" @click="deleteTodo(todo.id)">✕</button>
          </li>
        </ul>
        <p v-else class="empty-text">این کاربر هنوز هیچ کاری ندارد.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  users: { type: Array, default: () => [] },
})

const emit = defineEmits(['dataChanged'])

// ۱. متد تغییر وضعیت Todo (انجام شده / نشده)
const toggleTodo = async (todoId, newStatus) => {
  try {
    await $fetch(`/api/todos/${todoId}`, {
      method: 'PUT',
      body: { completed: newStatus },
    })
    emit('dataChanged') // ارسال رویداد به والد جهت رفرش داده‌ها
  } catch (error) {
    alert('خطا در تغییر وضعیت کار!')
  }
}

// ۲. متد حذف یک Todo
const deleteTodo = async (todoId) => {
  try {
    await $fetch(`/api/todos/${todoId}`, { method: 'DELETE' })
    emit('dataChanged')
  } catch (error) {
    alert('خطا در حذف کار!')
  }
}

// ۳. متد حذف کامل یک کاربر
const deleteUser = async (userId) => {
  if (!confirm('آیا از حذف این کاربر و تمام کارهایش مطمئن هستید؟')) return

  try {
    await $fetch(`/api/users/${userId}`, { method: 'DELETE' })
    emit('dataChanged')
  } catch (error) {
    alert('خطا در حذف کاربر!')
  }
}
</script>