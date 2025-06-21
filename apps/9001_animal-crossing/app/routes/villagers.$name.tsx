import { type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { VILLAGERS_KR } from "#/constants";
import {
  Card,
  CardContent,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  cn,
} from "@one-dawn/ui";
import {
  favColorMap,
  favStyleMap,
  genderMap,
  personalityMap,
} from "#/libs/mapping";

export async function loader({ params }: LoaderFunctionArgs) {
  const name = decodeURIComponent(params.name || "");
  const villager = VILLAGERS_KR.find(
    (v) => v.name_kr === name || v.name === name
  );

  if (!villager) {
    throw new Response("주민을 찾을 수 없습니다", { status: 404 });
  }

  return { villager };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.villager) {
    return [
      { title: "주민을 찾을 수 없습니다 - 1-blue의 동물의 숲 퀴즈" },
      { name: "description", content: "요청하신 주민을 찾을 수 없습니다." },
    ];
  }

  const { villager } = data;
  const villagerName = villager.name_kr || villager.name;
  const species = villager.species_kr || villager.species;
  const personality = villager.personality_kr || villager.personality;
  const birthday = `${villager.birthday_month_kr || villager.birthday_month} ${villager.birthday_day}일`;
  const images = [
    villager.photo_url,
    villager.image_url,
    villager.icon_url,
    "https://dodo.ac/np/images/3/32/Snake%27s_Photo_NH_Texture.png",
  ].filter(Boolean);

  const title = `1-blue | ${villagerName} - 동물의 숲 퀴즈`;
  const description = `1-blue의 동물의 숲 퀴즈: ${villagerName}은(는) ${species} 종족의 ${personality} 성격을 가진 주민입니다. 생일은 ${birthday}이며, 동물의 숲에서 만날 수 있습니다.`;
  const keywords = [
    "1-blue",
    villagerName,
    villager.name,
    species,
    personality,
    "동물의 숲",
    "동물의 숲 퀴즈",
    "동물의 숲 맞추기 게임",
  ];

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },

    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: images[0] },
    { property: "og:type", content: "profile" },

    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: images[0] },
  ];
};

export default function VillagerDetail() {
  const { villager } = useLoaderData<typeof loader>();

  // JSON-LD 구조화된 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: villager.name_kr || villager.name,
    alternateName:
      villager.name !== (villager.name_kr || villager.name)
        ? villager.name
        : undefined,
    description: `${villager.species_kr || villager.species} 종족의 ${villager.personality_kr || villager.personality} 성격을 가진 동물의 숲 주민`,
    image: villager.photo_url || villager.image_url || villager.icon_url,
    birthDate: `${villager.birthday_month_kr || villager.birthday_month} ${villager.birthday_day}`,
    additionalType: "AnimalCrossingVillager",
    category: villager.species_kr || villager.species,
    gender: villager.gender_kr || villager.gender,
    knowsAbout: [
      ...(villager.fav_colors_kr || villager.fav_colors || []),
      ...(villager.fav_styles_kr || villager.fav_styles || []),
    ],
    url: `https://animal-crossing.story-dict.com/villagers/${encodeURIComponent(villager.name_kr || villager.name)}`,
  };

  return (
    <TooltipProvider>
      {/* JSON-LD 구조화된 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* 뒤로가기 버튼 */}
          <div className="mb-6">
            <Link to="/villagers">
              <Button variant="outline" className="mb-4">
                ← 주민 목록으로 돌아가기
              </Button>
            </Link>
          </div>

          {/* 메인 카드 */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden p-0">
            {/* 헤더 섹션 */}
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 flex items-center space-x-6">
                <Avatar className="w-24 h-24 ring-4 ring-white shadow-2xl">
                  <AvatarImage
                    src={villager.icon_url || villager.image_url}
                    alt={villager.name_kr || villager.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white font-bold text-2xl">
                    {(villager.name_kr || villager.name).charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2">
                    {villager.name_kr || villager.name}
                  </h1>
                  <p className="text-xl text-white/80 mb-3">
                    {villager.species_kr || villager.species}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      className={cn(
                        "text-sm",
                        personalityMap[
                          villager.personality_kr || villager.personality
                        ]
                      )}
                    >
                      {villager.personality_kr || villager.personality}
                    </Badge>
                    <Badge
                      className={cn(
                        "text-sm",
                        genderMap[villager.gender_kr || villager.gender]
                      )}
                    >
                      {villager.gender_kr || villager.gender}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 기본 정보 */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    기본 정보
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">생일</span>
                      <span className="text-lg font-bold text-gray-900">
                        {villager.birthday_month_kr || villager.birthday_month}{" "}
                        {villager.birthday_day}일
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">별자리</span>
                      <Badge
                        variant="outline"
                        className="text-lg px-3 py-1 text-gray-900"
                      >
                        {villager.sign_kr || villager.sign}
                      </Badge>
                    </div>

                    {(villager.debut_kr || villager.debut) && (
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-700">
                          첫 등장
                        </span>
                        <span className="text-gray-900">
                          {villager.debut_kr || villager.debut}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 취향 정보 */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    취향
                  </h2>

                  {/* 좋아하는 색상 */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-700 mb-3">
                      좋아하는 색상
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(
                        villager.fav_colors_kr ||
                        villager.fav_colors ||
                        []
                      ).map((color: string, index: number) => (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <div
                              className={cn(
                                "w-8 h-8 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform",
                                favColorMap[color]
                              )}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{color}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>

                  {/* 좋아하는 스타일 */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-700 mb-3">
                      좋아하는 스타일
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(
                        villager.fav_styles_kr ||
                        villager.fav_styles ||
                        []
                      ).map((style: string, index: number) => (
                        <Badge
                          key={index}
                          className={cn("text-sm", favStyleMap[style])}
                        >
                          {style}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 명언 */}
              {(villager.quote_kr || villager.quote) && (
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">대사</h3>
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "{villager.quote_kr || villager.quote}"
                  </blockquote>
                </div>
              )}

              {/* 말버릇 */}
              {(villager.catchphrase_kr || villager.catchphrase) && (
                <div className="mt-6 p-6 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg border-l-4 border-pink-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    말버릇
                  </h3>
                  <p className="text-lg text-gray-700">
                    <span className="font-medium">
                      "{villager.catchphrase_kr || villager.catchphrase}"
                    </span>
                  </p>
                </div>
              )}

              {/* 이미지 갤러리 */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">이미지</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {villager.icon_url && (
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img
                        src={villager.icon_url}
                        alt="아이콘"
                        className="w-full h-32 object-contain mx-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        아이콘
                      </p>
                    </div>
                  )}
                  {villager.image_url && (
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img
                        src={villager.image_url}
                        alt="캐릭터 이미지"
                        className="w-full h-32 object-contain mx-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        캐릭터
                      </p>
                    </div>
                  )}
                  {villager.photo_url && (
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img
                        src={villager.photo_url}
                        alt="사진"
                        className="w-full h-32 object-contain mx-auto"
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">
                        사진
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
