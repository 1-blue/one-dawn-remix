// 파일 최상단에 추가
import "dotenv/config";

import { Villager } from "#/types";
import {
  convertDebutToKorean,
  convertGenderToKorean,
  convertMonthToKorean,
  convertPersonalityToKorean,
  convertQuoteToKorean,
  convertSignToKorean,
  convertSpeciesToKorean,
  convertVillagerNameToKorean,
} from "#/libs/convert";

const getAllVillagers = async () => {
  const data = (await fetch("https://api.nookipedia.com/villagers", {
    headers: {
      "X-API-KEY": "40d28686-daeb-4bbd-b0ac-738bfa4a7583",
    },
  }).then((res) => res.json())) as Villager[];

  return data.map(({ id, ...rest }) => ({
    ...rest,
    name_kr: convertVillagerNameToKorean(rest.name),
    personality_kr: convertPersonalityToKorean(rest.personality),
    gender_kr: convertGenderToKorean(rest.gender),
    birthday_month_kr: convertMonthToKorean(rest.birthday_month),
    sign_kr: convertSignToKorean(rest.sign),
    debut_kr: convertDebutToKorean(rest.debut),
    species_kr: convertSpeciesToKorean(rest.species),
    quote_kr: convertQuoteToKorean(rest.quote),
  }));
};

/**
 * 모든 주민 정보를 수집하여 DB에 저장하는 함수
 */
const generateAllVilager = async () => {
  try {
    const villagers = await getAllVillagers();

    console.log("🚀 villagers >> ", villagers[0]);
  } catch (error) {
    console.error(`주민 저장 중 예외 발생:`, JSON.stringify(error));
    return false;
  }
};

// 스크립트 실행
generateAllVilager();
