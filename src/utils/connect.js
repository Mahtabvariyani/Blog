import { PrismaClient } from '@prisma/client';


let prisma
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  console.log("prisma connected");
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
