import prisma from "../../utils/prisma";

export default defineEventHandler(async (event) => {
  // گرفتن id از آدرس URL (مثلا از /api/todos/12)
  const id = getRouterParam(event, "id");

  // حذف از دیتابیس توسط پریسما
  await prisma.todo.delete({
    where: { id: Number(id) },
  });

  return { success: true, message: "کار با موفقیت حذف شد" };
});
