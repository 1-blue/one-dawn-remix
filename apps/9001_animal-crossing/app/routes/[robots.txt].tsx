export const loader = () => {
  const robotText = `User-agent: *
Allow: /

# 크롤링 제외할 경로들
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Sitemap 위치
Sitemap: https://animal-crossing.onedawn.com/sitemap.xml

# 크롤링 속도 제한 (선택사항)
Crawl-delay: 1`;

  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
