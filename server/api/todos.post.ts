import prisma from "../utils/prisma";

export default defineEventHandler(async (event) => {
  // ۱. دریافت اطلاعات فرستاده شده (عنوان کار و آیدی کاربر)
  const body = await readBody(event);

  // ۲. ساخت Todo جدید و متصل کردن آن به کاربر با userId
  const newTodo = await prisma.todo.create({
    data: {
      title: body.title,
      userId: Number(body.userId), // تبدیل آیدی به عدد برای جلوگیری از ارور تایپ
    },
  });

  return {
    success: true,
    data: newTodo,
  };
});
