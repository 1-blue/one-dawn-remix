import {
  VILLAGER_BIRTHDAY_DAY,
  VILLAGER_BIRTHDAY_MONTH,
  VILLAGER_DEBUT,
  VILLAGER_GENDER,
  VILLAGER_NAMES,
  VILLAGER_PERSONALITY,
  VILLAGER_QUOTES,
  VILLAGER_SIGN,
  VILLAGER_SPECIES,
} from "./constants";

export type VillagerName = (typeof VILLAGER_NAMES)[number];
export type VillagerSpecies = (typeof VILLAGER_SPECIES)[number];
export type VillagerPersonality = (typeof VILLAGER_PERSONALITY)[number];
export type VillagerGender = (typeof VILLAGER_GENDER)[number];
export type VillagerBirthdayMonth = (typeof VILLAGER_BIRTHDAY_MONTH)[number];
export type VillagerBirthdayDay = (typeof VILLAGER_BIRTHDAY_DAY)[number];
export type VillagerSign = (typeof VILLAGER_SIGN)[number];
export type VillagerDebut = (typeof VILLAGER_DEBUT)[number];
export type VillagerQuote = (typeof VILLAGER_QUOTES)[number];

export interface Villager {
  name: VillagerName;
  url: string;
  alt_name: string;
  title_color: string;
  text_color: string;
  id: string;
  image_url: string;
  species: VillagerSpecies;
  personality: VillagerPersonality;
  gender: VillagerGender;
  birthday_month: VillagerBirthdayMonth;
  birthday_day: VillagerBirthdayDay;
  sign: VillagerSign;
  quote: VillagerQuote;
  phrase: string;
  clothing: string;
  islander: boolean;
  debut: VillagerDebut;
  prev_phrases: string[];
  appearances: VillagerDebut[];
}
