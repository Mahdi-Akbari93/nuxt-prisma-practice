import prisma from "../utils/prisma";

export default defineEventHandler(async (event) => {
  // ۱. گرفتن بدنه درخواست (body) فرستاده شده از سمت فرانت‌اند
  const body = await readBody(event);

  // ۲. ساخت کاربر جدید در دیتابیس با پریسما
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });

  // ۳. بازگرداندن اطلاعات کاربر ساخته شده به عنوان پاسخ
  return {
    success: true,
    data: newUser,
  };
});
