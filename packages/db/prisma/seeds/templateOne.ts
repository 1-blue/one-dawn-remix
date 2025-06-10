import { PrismaClient } from "@prisma/client";

export async function seedTemplateOne(prisma: PrismaClient) {
  console.log("🌱 Seeding template_one schema...");

  const templateOneDogs = [
    { name: "골든" },
    { name: "허스키" },
    { name: "푸들" },
    { name: "시바" },
    { name: "코기" },
  ];

  await prisma.templateOneDog.createMany({
    data: templateOneDogs,
    skipDuplicates: true,
  });

  console.log(`✅ Created ${templateOneDogs.length} template dogs`);
}
