import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// ساخت آداپتور با پاس دادن آدرس فایل دیتابیس به صورت آبجکت
const adapter = new PrismaBetterSqlite3({ url: "file:./prisma/dev.db" });

// پاس دادن آداپتور به PrismaClient
const prisma = new PrismaClient({ adapter });

export default prisma;
