import prisma from "../../utils/prisma";

export default defineEventHandler(async (event) => {
  // ۱. گرفتن شناسه (id) کاربر از آدرس URL
  const id = getRouterParam(event, "id");

  // ۲. حذف کاربر از دیتابیس
  await prisma.user.delete({
    where: { id: Number(id) },
  });

  return { success: true, message: "کاربر با موفقیت حذف شد" };
});
