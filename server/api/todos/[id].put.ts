import prisma from "../../utils/prisma";


export default defineEventHandler(async (event) => {
  // ۱. گرفتن شناسه (id) از آدرس URL
  const id = getRouterParam(event, "id");

  // ۲. خواندن بدنه درخواست (body) که حاوی وضعیت جدید است
  const body = await readBody(event);

  // ۳. به‌روزرسانی مقدار completed در دیتابیس
  const updatedTodo = await prisma.todo.update({
    where: { id: Number(id) },
    data: {
      completed: body.completed,
    },
  });

  return { success: true, data: updatedTodo };
});
