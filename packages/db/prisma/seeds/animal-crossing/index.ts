import {
  AnimalCrossingVillagerDebut,
  AnimalCrossingVillagerPersonality,
  AnimalCrossingVillagerSpecies,
  PrismaClient,
} from "@prisma/client";
import {
  convertDebutToKorean,
  convertGenderToKorean,
  convertMonthToKorean,
  convertPersonalityToKorean,
  convertQuoteToKorean,
  convertSignToKorean,
  convertSpeciesToKorean,
  convertVillagerNameToKorean,
} from "./libs/convert";
import { Villager } from "./libs/types";

export async function seedAnimalCrossing(prisma: PrismaClient) {
  console.log("🌱 Seeding animal_crossing schema...");

  const data = (await fetch("https://api.nookipedia.com/villagers", {
    headers: {
      "X-API-KEY": process.env.NOOKIPEDIA_API_KEY,
    },
  }).then((res) => res.json())) as Villager[];

  const villagers = data.map((villager) => ({
    ...villager,
    species: villager.species.replace(
      " ",
      "_"
    ) as AnimalCrossingVillagerSpecies,
    personality: villager.personality.replace(
      " ",
      "_"
    ) as AnimalCrossingVillagerPersonality,
    debut: villager.debut.replace("+", "_PLUS") as AnimalCrossingVillagerDebut,
    appearances: villager.appearances.map(
      (appearance) =>
        appearance.replace("+", "_PLUS") as AnimalCrossingVillagerDebut
    ),
    name_kr: convertVillagerNameToKorean(villager.name),
    personality_kr: convertPersonalityToKorean(villager.personality),
    gender_kr: convertGenderToKorean(villager.gender),
    birthday_month_kr: convertMonthToKorean(villager.birthday_month),
    sign_kr: convertSignToKorean(villager.sign),
    debut_kr: convertDebutToKorean(villager.debut),
    species_kr: convertSpeciesToKorean(villager.species),
    quote_kr: convertQuoteToKorean(villager.quote),
  }));

  await prisma.animalCrossingVillager.createMany({
    data: villagers,
    skipDuplicates: true,
  });

  console.log(`✅ Created ${villagers.length} villagers`);
}
