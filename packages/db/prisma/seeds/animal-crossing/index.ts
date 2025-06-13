import {
  AnimalCrossingVillagerDebut,
  AnimalCrossingVillagerPersonality,
  AnimalCrossingVillagerSpecies,
  PrismaClient,
} from "@prisma/client";
import {
  convertCatchphraseToKorean,
  convertDebutToKorean,
  convertFavColorToKorean,
  convertFavStyleToKorean,
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

  const data = (await fetch(
    "https://api.nookipedia.com/villagers?nhdetails=true",
    {
      headers: {
        "X-API-KEY": process.env.NOOKIPEDIA_API_KEY,
      },
    }
  ).then((res) => res.json())) as Villager[];

  const villagers = data
    .filter((v) => !!v.nh_details)
    .map((villager) => {
      const { nh_details, ...rest } = villager;

      return {
        ...rest,
        image_url: nh_details.image_url,
        photo_url: nh_details.photo_url,
        icon_url: nh_details.icon_url,
        fav_colors: nh_details.fav_colors,
        fav_styles: nh_details.fav_styles,
        catchphrase: nh_details.catchphrase,

        species: villager.species.replace(
          " ",
          "_"
        ) as AnimalCrossingVillagerSpecies,
        personality: villager.personality.replace(
          " ",
          "_"
        ) as AnimalCrossingVillagerPersonality,
        debut: villager.debut.replace(
          "+",
          "_PLUS"
        ) as AnimalCrossingVillagerDebut,
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
        fav_colors_kr: nh_details.fav_colors.map((color) =>
          convertFavColorToKorean(color)
        ),
        fav_styles_kr: nh_details.fav_styles.map((style) =>
          convertFavStyleToKorean(style)
        ),
        catchphrase_kr: convertCatchphraseToKorean(nh_details.catchphrase),
      };
    });

  await prisma.animalCrossingVillager.createMany({
    data: villagers,
    skipDuplicates: true,
  });

  console.log(`✅ Created ${villagers.length} villagers`);
}
