# Turborepo Monorepo with Remix, Shadcn, Tailwind v4 & React 19

현대적인 웹 애플리케이션 개발을 위한 monorepo 설정입니다.

## 🚀 기술 스택

- **Monorepo**: Turborepo
- **프레임워크**: Remix
- **디자인 시스템**: shadcn/ui (canary)
- **스타일링**: Tailwind CSS v4.1.8
- **React**: React 19
- **테마**: remix-themes
- **토스트**: Sonner
- **타입스크립트**: TypeScript
- **린팅**: ESLint
- **포매팅**: Prettier with prettier-plugin-tailwindcss

## 🏗️ 프로젝트 생성 방법

### 🎯 권장: 기술 스택별 보일러플레이트 사용

직접 처음부터 구성하기보다는 **검증된 공식 템플릿을 활용**하는 것을 강력히 권장합니다:

#### 📦 Turborepo (모노레포)

```bash
# 1. 터보레포 기본 템플릿
pnpm dlx create-turbo@latest my-turborepo

# 2. Remix 전용 터보레포 템플릿
pnpm dlx create-turbo@latest my-turborepo --example with-remix

# 3. React 앱 템플릿
pnpm dlx create-turbo@latest my-turborepo --example basic

# 4. Next.js 템플릿
pnpm dlx create-turbo@latest my-turborepo --example with-nextjs
```

#### ⚡ Remix (프레임워크)

```bash
# 1. Remix 기본 템플릿
npx create-remix@latest my-remix-app

# 2. Remix + TypeScript
npx create-remix@latest my-remix-app --typescript

# 3. Remix + Vercel 배포 설정
npx create-remix@latest my-remix-app --template vercel

# 4. Remix + Tailwind CSS
npx create-remix@latest my-remix-app --template remix-run/remix/templates/remix-tailwind
```

#### 🎨 shadcn/ui (디자인 시스템)

```bash
# 1. Next.js + shadcn/ui
npx create-next-app@latest my-app
npx shadcn@latest init

# 2. Vite + React + shadcn/ui
npm create vite@latest my-app -- --template react-ts
npx shadcn@latest init

# 3. Remix + shadcn/ui (수동 설정)
# Remix 프로젝트 생성 후 shadcn/ui 설정 필요
```

#### 🌊 Tailwind CSS

```bash
# 1. Tailwind + Vite
npm create vite@latest my-app -- --template vanilla
npm install -D tailwindcss postcss autoprefixer

# 2. Tailwind + Next.js
npx create-next-app@latest my-app --tailwind

# 3. Tailwind + Remix
npx create-remix@latest my-app
# 수동으로 Tailwind 설정 추가
```

#### 🔄 통합된 스택 조합

```bash
# 1. 터보레포 + Remix 조합 (권장)
pnpm dlx create-turbo@latest my-project --example with-remix
cd my-project && pnpm install

# 2. Remix + TypeScript + 기본 설정
npx create-remix@latest my-project --typescript --install
cd my-project

# 3. T3 Stack (Next.js + TypeScript + Tailwind + tRPC)
npm create t3-app@latest my-t3-app

# 4. Vite + React + TypeScript + Tailwind
npm create vite@latest my-vite-app -- --template react-ts
```

### 🔧 기존 템플릿 커스터마이징 단계

선택한 보일러플레이트 생성 후 이 프로젝트 설정을 적용하는 단계:

1. **기본 템플릿 생성** (위 명령어 중 선택)
2. **Tailwind CSS v4 업그레이드**
3. **React 19 업그레이드** 
4. **shadcn/ui 설정 추가**
5. **remix-themes 통합**
6. **절대 경로 설정**
7. **모노레포 구조 정리** (필요시)

### 🛠️ 추천 조합별 시작 방법

#### 🥇 **최고 권장**: Turborepo + Remix
```bash
pnpm dlx create-turbo@latest my-project --example with-remix
cd my-project
pnpm install
# 이후 커스터마이징 적용
```

#### 🥈 **단일 앱**: Remix 단독
```bash
npx create-remix@latest my-project --typescript
cd my-project
npm install
# 이후 Tailwind v4, shadcn/ui 추가
```

#### 🥉 **빠른 프로토타입**: Vite + React
```bash
npm create vite@latest my-project -- --template react-ts
cd my-project
npm install
# 이후 전체 스택 추가
```

> 💡 **핵심 팁**: 
> - **모노레포가 필요하다면** → Turborepo 템플릿 사용
> - **단일 앱이면** → Remix 템플릿 사용  
> - **빠른 시작이 목표라면** → 각 기술의 공식 보일러플레이트 조합
> - **처음부터 모든 것을 직접 구성하지 마세요!** 🚫

### 🛠️ 사용 가능한 터보레포 템플릿

```bash
# 기본 템플릿
pnpm dlx create-turbo@latest

# React 앱 템플릿
pnpm dlx create-turbo@latest --example basic

# Remix 템플릿
pnpm dlx create-turbo@latest --example with-remix

# Next.js 템플릿
pnpm dlx create-turbo@latest --example with-nextjs

# 템플릿 목록 확인
pnpm dlx create-turbo@latest --help
```

## 📁 프로젝트 구조

```
├── apps/
│   └── web/                 # Remix 애플리케이션
│       ├── app/
│       │   ├── components/  # 앱별 컴포넌트
│       │   ├── routes/      # Remix 라우트
│       │   ├── root.tsx     # 루트 레이아웃
│       │   └── tailwind.css # Tailwind 스타일
│       └── src/             # 소스 디렉토리 (필수)
├── packages/
│   ├── typescript-config/   # 공통 TypeScript 설정
│   ├── eslint-config/      # 공통 ESLint 설정
│   └── ui/                 # shadcn/ui 컴포넌트 (필수)
├── turbo.json
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## 🛠️ 주요 기능

- **다크/라이트 모드**: remix-themes 사용
- **Toast 알림**: Sonner 통합
- **절대 경로**: `#` 기호 사용 (`#/components/...`)
- **Tailwind v4.1.8**: 최신 CSS 엔진
- **React 19**: 최신 React 기능
- **Monorepo**: Turborepo로 효율적인 빌드

## 🚀 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

```bash
# 전체 프로젝트 개발 모드
pnpm dev

# 특정 앱만 실행
pnpm dev --filter=@remix-shadcn-monorepo/web
```

### 3. 빌드

```bash
# 전체 프로젝트 빌드
pnpm build

# 특정 앱만 빌드
pnpm build --filter=@remix-shadcn-monorepo/web
```

## 📦 패키지 관리

### 새 패키지 추가

```bash
# 특정 앱에 패키지 추가
pnpm add <package-name> --filter @remix-shadcn-monorepo/web

# UI 패키지에 추가
pnpm add <package-name> --filter @remix-shadcn-monorepo/ui
```

### 워크스페이스 패키지 사용

```typescript
// apps/web에서 UI 패키지 사용
import { Button } from "@remix-shadcn-monorepo/ui";
```

## 🎨 shadcn/ui 컴포넌트 추가

UI 패키지에 새로운 shadcn 컴포넌트를 추가하려면:

1. `packages/ui/src/components/ui/` 에 컴포넌트 파일 생성
2. `packages/ui/src/index.ts` 에서 export
3. 앱에서 사용

## 🔧 개발 도구

### 린팅

```bash
pnpm lint
```

### 타입 체크

```bash
pnpm type-check
```

### 포매팅

```bash
pnpm format
```

### 클린업

```bash
pnpm clean
```

## 📝 주요 설정

### 절대 경로 설정

- TypeScript: `#/*` → `./app/*`
- Vite: `#` → `./app`

### 테마 시스템

- `remix-themes` 사용
- 다크/라이트 모드 자동 전환
- CSS 변수 기반 테마

### Tailwind v4

- `@import "tailwindcss"` 사용
- CSS 변수 통합
- 최신 CSS 엔진

## 🚀 배포

Remix 앱은 다양한 플랫폼에 배포 가능:

- Vercel
- Netlify
- Fly.io
- Railway

## 📚 참고 자료

- [Turborepo 문서](https://turbo.build/repo/docs)
- [Turborepo 템플릿](https://turbo.build/repo/docs/getting-started/create-new)
- [Remix 문서](https://remix.run/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [Tailwind CSS v4.1.8](https://tailwindcss.com/docs)
- [remix-themes](https://github.com/abereghici/remix-themes)

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요. 