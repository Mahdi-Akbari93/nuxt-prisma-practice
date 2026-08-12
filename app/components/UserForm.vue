<template>
  <div class="card">
    <h2>۱. ثبت کاربر جدید</h2>
    <div class="form-group">
      <input v-model="userName" type="text" placeholder="نام..." />
      <input v-model="userEmail" type="email" placeholder="ایمیل..." />
      <button @click="createUser">ایجاد کاربر</button>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

// تعریف event برای مطلع کردن والد از ساخته شدن کاربر
const emit = defineEmits(['userCreated'])

const userName = ref('')
const userEmail = ref('')

const createUser = async () => {
  if (!userName.value || !userEmail.value) {
    return alert('لطفاً نام و ایمیل را کامل وارد کنید!')
  }

  try {
    await $fetch('/api/users', {
      method: 'POST',
      body: { name: userName.value, email: userEmail.value },
    })

    userName.value = ''
    userEmail.value = ''
    
    // ارسال سیگنال به صفحه اصلی برای refresh کردن داده‌ها
    emit('userCreated')
  } catch (error) {
    alert('خطا در ثبت کاربر!')
  }
}
</script>
