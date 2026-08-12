import prisma from "../utils/prisma";

export default defineEventHandler(async (event) => {
  // گرفتن تمام کاربران به همراه لیست کارهایشان (todos)
  const users = await prisma.user.findMany({
    include: {
      todos: true,
    },
  });

  return {
    success: true,
    data: users,
  };
});
