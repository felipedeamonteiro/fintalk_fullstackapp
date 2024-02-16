//This file is to stop prisma to create a client every time a line of code is 
//modified and hot reload is used in next.js in dev environment

import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
};

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;