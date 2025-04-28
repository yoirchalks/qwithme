import { PrismaClient } from '@prisma/client';

declare global {
  // This tells TypeScript that `global.prisma` will be a PrismaClient instance
  var prisma: PrismaClient | undefined;
}

export {};