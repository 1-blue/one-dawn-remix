import { PrismaClient } from "@prisma/client";
import { seedTemplateOne } from "./templateOne";
import { seedTemplateTwo } from "./templateTwo";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  try {
    await seedTemplateOne(prisma);
    await seedTemplateTwo(prisma);

    console.log("✅ Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  throw e;
});
