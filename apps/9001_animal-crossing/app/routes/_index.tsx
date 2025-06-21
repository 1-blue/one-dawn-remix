import type { MetaFunction } from "@remix-run/node";
import { VILLAGERS_NAMES, VILLAGERS_PERSONALITIES } from "#/constants";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  const title = `1-blue | 주민 목록 동물의 숲 퀴즈`;
  const description = `1-blue의 동물의 숲 퀴즈: 동물의 숲의 주민들을 모두 만나보세요! 성격, 종족, 좋아하는 색상과 스타일로 필터링하여 당신이 원하는 완벽한 주민을 찾아보세요.`;
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
    { name: "author", content: "One Dawn" },

    // Open Graph 메타태그
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:image", content: image },
    { property: "og:site_name", content: "1-blue 동물의 숲 퀴즈/맞추기 게임" },

    // Twitter 메타태그
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: "/images/animal-crossing-og.jpg" },

    // 추가 SEO 메타태그
    { name: "robots", content: "index, follow" },
    { name: "language", content: "ko" },
    { name: "theme-color", content: "#8e51ff" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl font-bold">메인 페이지 구현 예정</div>
      <Link to="/villagers" className="text-primary font-bold underline">
        주민 목록
      </Link>
    </div>
  );
}
