import { VILLAGERS_NAMES } from "#/constants";

export const loader = async () => {
  const baseUrl = "https://animal-crossing.story-dict.com";
  const currentDate = new Date().toISOString();

  // 정적 페이지들
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      priority: "1.0",
      changefreq: "weekly",
    },
    {
      url: `${baseUrl}/villagers`,
      lastmod: currentDate,
      priority: "0.9",
      changefreq: "daily",
    },
  ];

  // 동적 주민 페이지들
  const villagerPages = VILLAGERS_NAMES.map((name) => ({
    url: `${baseUrl}/villagers/${encodeURIComponent(name)}`,
    lastmod: currentDate,
    priority: "0.8",
    changefreq: "monthly",
  }));

  // 모든 페이지 합치기
  const allPages = [...staticPages, ...villagerPages];

  // XML 생성
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
