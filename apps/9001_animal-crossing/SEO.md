# 🔍 SEO 설정 가이드

## 📋 개요

동물의 숲 앱의 검색 엔진 최적화(SEO)를 위한 완전한 설정이 구현되어 있습니다.

## 🗂️ 구현된 SEO 기능

### 1. 메타데이터 (Meta Tags)
- **기본 SEO**: title, description, keywords, author, robots
- **Open Graph**: Facebook, LinkedIn 등 소셜 미디어 최적화
- **Twitter Cards**: Twitter 전용 메타데이터
- **구조화된 데이터 (JSON-LD)**: 검색 엔진이 이해하기 쉬운 데이터 형식

### 2. 사이트맵 (Sitemap.xml)
- **경로**: `/sitemap.xml`
- **동적 생성**: 모든 주민 페이지 자동 포함
- **업데이트**: 주민 데이터 변경 시 자동 반영

### 3. 로봇 텍스트 (Robots.txt)
- **경로**: `/robots.txt`
- **크롤링 허용**: 모든 페이지 크롤링 허용
- **제외 경로**: 관리자, API 경로 제외

## 📄 페이지별 메타데이터

### 메인 페이지 (/)
```typescript
title: "1-blue | 주민 목록 동물의 숲 퀴즈"
description: "1-blue의 동물의 숲 퀴즈: 동물의 숲의 주민들을 모두 만나보세요!"
keywords: ["1-blue", "동물의 숲", "퀴즈", ...주민이름들, ...성격들]
```

### 주민 목록 페이지 (/villagers)
```typescript
title: "1-blue | 주민 목록 동물의 숲 퀴즈"
description: "동적 주민 수 포함된 설명"
keywords: "브랜드명 + 게임 관련 키워드 + 모든 주민/성격 이름"
```

### 개별 주민 페이지 (/villagers/:name)
```typescript
title: "1-blue | {주민이름} - 동물의 숲 퀴즈"
description: "{주민이름}의 상세 정보 (종족, 성격, 생일)"
keywords: "브랜드명 + 주민 관련 키워드"
image: "주민의 실제 이미지 URL"
```

## 🤖 Robots.txt 설정

```txt
User-agent: *
Allow: /

# 크롤링 제외할 경로들
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Sitemap 위치
Sitemap: https://animal-crossing.onedawn.com/sitemap.xml

# 크롤링 속도 제한
Crawl-delay: 1
```

## 🗺️ Sitemap.xml 구조

### 정적 페이지
- **홈페이지**: priority 1.0, weekly 업데이트
- **주민 목록**: priority 0.9, daily 업데이트

### 동적 페이지 (주민별)
- **모든 주민 페이지**: priority 0.8, monthly 업데이트
- **총 페이지 수**: 2개 정적 + 391개 주민 = 393개 페이지

## 📊 구조화된 데이터 (JSON-LD)

각 주민 페이지에 Schema.org 형식의 구조화된 데이터가 포함됩니다:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "주민 이름",
  "description": "주민 설명",
  "image": "주민 이미지 URL",
  "birthDate": "생일",
  "additionalType": "AnimalCrossingVillager",
  "category": "종족",
  "gender": "성별"
}
```

## 🔧 테스트 방법

### 1. 로컬 테스트
```bash
# 개발 서버 시작
pnpm dev

# 브라우저에서 확인
http://localhost:3000/robots.txt
http://localhost:3000/sitemap.xml
```

### 2. SEO 검증 도구
- **Google Search Console**: 사이트맵 제출
- **Facebook Debugger**: Open Graph 태그 확인
- **Twitter Card Validator**: Twitter 카드 확인
- **Rich Results Test**: 구조화된 데이터 확인

### 3. 메타데이터 확인
브라우저 개발자 도구에서 `<head>` 태그 내용 확인

## 🚀 배포 전 체크리스트

- [ ] `robots.txt` 접근 가능 확인
- [ ] `sitemap.xml` 생성 및 내용 확인
- [ ] 모든 페이지의 메타데이터 확인
- [ ] Open Graph 이미지 URL 유효성 확인
- [ ] 구조화된 데이터 문법 검증
- [ ] Google Search Console에 사이트맵 제출

## 📈 SEO 효과

### 검색 엔진 최적화
- **Google**: 더 나은 색인화 및 검색 결과 표시
- **Naver**: 한국어 키워드 최적화
- **Bing**: Microsoft 검색 엔진 지원

### 소셜 미디어 최적화
- **Facebook/Instagram**: 링크 공유 시 예쁜 카드 표시
- **Twitter**: 트위터 카드로 매력적인 미리보기
- **KakaoTalk**: 링크 공유 시 이미지와 설명 표시

### 사용자 경험 개선
- **브라우저 탭**: 명확한 페이지 제목
- **북마크**: 의미있는 페이지 이름
- **공유**: 풍부한 메타데이터로 더 나은 공유 경험

## 🔗 유용한 링크

- [Google Search Console](https://search.google.com/search-console)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org](https://schema.org/)

## 📝 유지보수

### 정기 확인 사항
1. **사이트맵 업데이트**: 새 주민 추가 시 자동 반영 확인
2. **메타데이터 검토**: 브랜드명, 설명 등 최신 상태 유지
3. **이미지 URL**: 주민 이미지 링크 유효성 확인
4. **검색 성과**: Google Search Console에서 성과 모니터링

### 개선 아이디어
- [ ] 다국어 메타데이터 지원
- [ ] 동적 이미지 생성 (주민별 커스텀 OG 이미지)
- [ ] 사이트맵 인덱스 파일 (페이지 수 증가 시)
- [ ] 리치 스니펫 추가 (별점, 리뷰 등) 