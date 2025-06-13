import {
  VILLAGER_BIRTHDAY_DAY,
  VILLAGER_BIRTHDAY_MONTH,
  VILLAGER_CATCHPHRASE,
  VILLAGER_DEBUT,
  VILLAGER_FAV_COLORS,
  VILLAGER_FAV_STYLES,
  VILLAGER_GENDER,
  VILLAGER_HOBBY,
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
export type VillagerHobby = (typeof VILLAGER_HOBBY)[number];
export type VillagerFavColor = (typeof VILLAGER_FAV_COLORS)[number];
export type VillagerFavStyle = (typeof VILLAGER_FAV_STYLES)[number];
export type VillagerDebut = (typeof VILLAGER_DEBUT)[number];
export type VillagerQuote = (typeof VILLAGER_QUOTES)[number];
export type VillagerCatchphrase = (typeof VILLAGER_CATCHPHRASE)[number];

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
  nh_details: {
    image_url: string;
    photo_url: string;
    icon_url: string;
    quote: VillagerQuote;
    "sub-personality": string;
    catchphrase: VillagerCatchphrase;
    clothing: string;
    clothing_variation: string;
    fav_styles: VillagerFavStyle[];
    fav_colors: VillagerFavColor[];
    hobby: VillagerHobby;
    house_interior_url: string;
    house_exterior_url: string;
    house_wallpaper: string;
    house_flooring: string;
    house_music: string;
    house_music_note: string;
    umbrella: string;
  };
}
