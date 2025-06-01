import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig, Pool } from "@neondatabase/serverless";

import ws from "ws";
neonConfig.webSocketConstructor = ws;

export const db = new PrismaClient();

const connectionString = process.env.DATABASE_URL;

const createNeonClient = (schema?: string) => {
  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool, schema ? { schema } : undefined);

  return new PrismaClient({ adapter } as any);
};

export type { PrismaClient } from "@prisma/client";
export * from "@prisma/client";

export const getDBClient = (schema?: string) => {
  const isEdgeRuntime =
    typeof globalThis !== "undefined" &&
    (globalThis as any).EdgeRuntime !== undefined;

  const isVercelEnv =
    typeof process !== "undefined" &&
    (process.env?.VERCEL_ENV === "preview" ||
      process.env?.VERCEL_ENV === "production");

  if (isEdgeRuntime || isVercelEnv) {
    return createNeonClient(schema);
  }

  return db;
};
