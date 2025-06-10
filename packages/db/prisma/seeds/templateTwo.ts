import { PrismaClient } from "@prisma/client";

export async function seedTemplateTwo(prisma: PrismaClient) {
  console.log("🌱 Seeding template_two schema...");

  const templateTwoDogs = [
    { name: "멍멍이" },
    { name: "바둑이" },
    { name: "초코" },
    { name: "쿠키" },
  ];

  await prisma.templateTwoDog.createMany({
    data: templateTwoDogs,
    skipDuplicates: true,
  });

  console.log(`✅ Created ${templateTwoDogs.length} template_two dogs`);
}
