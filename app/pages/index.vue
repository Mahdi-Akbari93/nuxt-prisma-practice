<template>
  <div class="container">
    <h1>🚀 سیستم مدیریت کاربران و کارها (Nuxt 3 + Prisma 7)</h1>

    <!-- 
      قابلیت شگفت‌انگیز ناکست (Auto-Imports):
      بدون هیچ‌گونه import دستی، کامپوننت‌ها به طور مستقیم قابل استفاده هستند!
    -->
    <UserForm @user-created="refresh" />
    <TodoForm :users="users?.data" @todo-created="refresh" />
    <UserList :users="users?.data" @data-changed = "refresh"/>
  </div>
</template>

<script setup>
// گرفتن اطلاعات از API
const { data: users, refresh } = await useFetch('/api/users')
</script>
