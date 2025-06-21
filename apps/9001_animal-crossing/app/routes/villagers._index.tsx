import { VirtuosoGrid } from "react-virtuoso";
import { useLoaderData, Link, useSearchParams } from "@remix-run/react";
import { useMemo } from "react";
import type { MetaFunction } from "@remix-run/node";
import {
  VILLAGERS_KR,
  VILLAGERS_NAMES,
  VILLAGERS_PERSONALITIES,
} from "#/constants";
import { Badge, TooltipProvider } from "@one-dawn/ui";

import VillagerCard from "#/components/VillagerCard";
import VillagerFilter from "#/components/VillagerFilter";
import { VirtuosoGridComponent } from "#/components/common/VirtuosoGridComponent";

export const meta: MetaFunction = () => {
  const title = `1-blue | 주민 목록 동물의 숲 퀴즈`;
  const description = `1-blue의 동물의 숲 퀴즈: 동물의 숲의 ${VILLAGERS_KR.length}명의 주민들을 모두 만나보세요! 성격, 종족, 좋아하는 색상과 스타일로 필터링하여 당신이 원하는 완벽한 주민을 찾아보세요.`;
  const keywords = [
    "1-blue",
    "동물의 숲",
    "동물의 숲 퀴즈",
    "동물의 숲 맞추기 게임",
    ...VILLAGERS_PERSONALITIES,
    ...VILLAGERS_NAMES,
  ];
  const image = "https://dodo.ac/np/images/3/32/Snake%27s_Photo_NH_Texture.png";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },

    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },

    // Twitter
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
};

export const loader = async () => {
  return { villagers: VILLAGERS_KR };
};

const VillagersPage = () => {
  const { villagers } = useLoaderData<typeof loader>();

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const selectedPersonalities =
    searchParams.get("personality")?.split(",") || [];
  const selectedSpecies = searchParams.get("species")?.split(",") || [];
  const selectedColors = searchParams.get("color")?.split(",") || [];
  const selectedStyles = searchParams.get("style")?.split(",") || [];
  const selectedMonths = searchParams.get("month")?.split(",") || [];

  // 필터링된 주민 목록
  const filteredVillagers = useMemo(() => {
    return villagers.filter((villager) => {
      const nameMatch =
        !searchTerm ||
        (villager.name_kr || villager.name)
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const personalityMatch =
        selectedPersonalities.length === 0 ||
        selectedPersonalities.includes(
          villager.personality_kr || villager.personality
        );

      const speciesMatch =
        selectedSpecies.length === 0 ||
        selectedSpecies.includes(villager.species_kr || villager.species);

      const colorMatch =
        selectedColors.length === 0 ||
        selectedColors.some((color) =>
          (villager.fav_colors_kr || villager.fav_colors || []).includes(color)
        );

      const styleMatch =
        selectedStyles.length === 0 ||
        selectedStyles.some((style) =>
          (villager.fav_styles_kr || villager.fav_styles || []).includes(style)
        );

      const monthMatch =
        selectedMonths.length === 0 ||
        selectedMonths.includes(
          villager.birthday_month_kr || villager.birthday_month
        );

      return (
        nameMatch &&
        personalityMatch &&
        speciesMatch &&
        colorMatch &&
        styleMatch &&
        monthMatch
      );
    });
  }, [
    villagers,
    searchTerm,
    selectedPersonalities,
    selectedSpecies,
    selectedColors,
    selectedStyles,
    selectedMonths,
  ]);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🏝️ 동물의 숲 주민들
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              사랑스러운 동물의 숲 주민들을 만나보세요. 각 주민의 상세 정보를
              확인하려면 카드를 클릭하세요.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Badge
                variant="secondary"
                className="text-sm px-4 py-2 bg-blue-100 text-blue-800"
              >
                총 {villagers.length}명의 주민
              </Badge>
              <Badge
                variant="outline"
                className="text-sm px-4 py-2 bg-white text-gray-800 border-gray-300"
              >
                표시 중 {filteredVillagers.length}명
              </Badge>
            </div>
          </div>

          {/* 필터링 섹션 */}
          <VillagerFilter villagers={villagers} />

          <VirtuosoGrid
            useWindowScroll
            totalCount={filteredVillagers.length}
            overscan={2000}
            increaseViewportBy={2000}
            components={VirtuosoGridComponent}
            itemContent={(index) => (
              <Link
                key={filteredVillagers[index]!.id}
                to={`/villagers/${encodeURIComponent(filteredVillagers[index]!.name_kr || filteredVillagers[index]!.name)}`}
              >
                <VillagerCard villager={filteredVillagers[index]!} />
              </Link>
            )}
            computeItemKey={(index) => filteredVillagers[index]?.id || index}
          />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default VillagersPage;
