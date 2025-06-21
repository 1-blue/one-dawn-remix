# One Dawn 프로젝트 규칙

## 개요
One Dawn은 pnpm을 사용하는 모노레포 프로젝트입니다. 각 앱은 Remix + Vite 기반으로 구성되어 있습니다.

## 프로젝트 구조

### 모노레포 설정
- **패키지 매니저**: pnpm
- **빌드 도구**: Turbo
- **워크스페이스**: `apps/*`, `packages/*`

### 디렉토리 구조
```
one-dawn-remix/
├── apps/                    # 각 애플리케이션
│   ├── 9000_template/      # 템플릿 앱 (기본 구조 참고용)
│   └── 9001_animal-crossing/
├── packages/               # 공유 패키지
│   ├── db/                # 데이터베이스 패키지
│   ├── ui/                # UI 컴포넌트 패키지
│   ├── eslint-config/     # ESLint 설정
│   └── typescript-config/ # TypeScript 설정
```

## 기술 스택

### 각 앱 (apps/*)
- **프레임워크**: Remix + Vite
- **스타일링**: Tailwind CSS v4
- **테마**: remix-themes
- **알림**: sonner

### 패키지 (packages/*)

#### 1. DB 패키지 (`@one-dawn/db`)
- **ORM**: Prisma
- **데이터베이스**: Neon (PostgreSQL)
- **어댑터**: @prisma/adapter-neon

**특징:**
- 스키마별로 개별 파일 관리 (`prisma/schema/`)
  - `base.prisma`: 기본 설정
  - `template-one.prisma`: 템플릿 1 스키마
  - `template-two.prisma`: 템플릿 2 스키마
  - `anima-crossing.prisma`: 동물의 숲 스키마
- 스키마별 시드 파일 (`prisma/seeds/`)
  - `templateOne.ts`
  - `templateTwo.ts`
  - `animal-crossing/`: 동물의 숲 시드

**사용법:**
```bash
# DB 관련 명령어 (루트에서 실행)
pnpm db:generate     # Prisma 클라이언트 생성
pnpm db:push         # 스키마를 DB에 푸시
pnpm db:migrate      # 마이그레이션 실행
pnpm db:seed         # 시드 데이터 삽입
pnpm db:studio       # Prisma Studio 실행
```

#### 2. UI 패키지 (`@one-dawn/ui`)
- **스타일링**: Tailwind CSS v4
- **컴포넌트**: shadcn/ui
- **애니메이션**: Magic UI
- **유틸리티**: cn 함수 (clsx + tailwind-merge)

**사용법:**
```bash
# UI 컴포넌트 추가
pnpm ui:add [component-name]
```

**중요 함수:**
```typescript
import { cn } from "@one-dawn/ui/lib/utils";

// 클래스명 병합 시 반드시 cn 함수 사용
const className = cn("base-class", conditionalClass && "conditional-class");
```

#### 3. ESLint Config (`@one-dawn/eslint-config`)
- 프로젝트 전체의 ESLint 설정 관리

#### 4. TypeScript Config (`@one-dawn/typescript-config`)
- 프로젝트 전체의 TypeScript 설정 관리

## 개발 규칙

### 1. 새 앱 생성
- `apps/9000_template`을 기본 구조로 참고
- 패키지명: `@one-dawn/[app-name]`
- 필수 의존성:
  ```json
  {
    "@one-dawn/ui": "workspace:*",
    "@one-dawn/db": "workspace:*",
    "@one-dawn/eslint-config": "workspace:*",
    "@one-dawn/typescript-config": "workspace:*"
  }
  ```

### 2. 스타일링 규칙
- Tailwind CSS v4 사용
- UI 컴포넌트는 `@one-dawn/ui`에서 import
- 클래스명 병합 시 반드시 `cn` 함수 사용

### 3. 데이터베이스 사용
- 각 앱에서 `@one-dawn/db`를 import하여 사용
- 새 스키마 추가 시 `packages/db/prisma/schema/`에 개별 파일 생성
- 시드 데이터는 `packages/db/prisma/seeds/`에 추가

### 4. 개발 명령어
```bash
# 개발 서버 시작 (모든 앱)
pnpm dev

# 특정 앱 개발 서버
pnpm --filter @one-dawn/[app-name] dev

# 빌드
pnpm build

# 의존성 정리
pnpm clean
```

## 환경 요구사항
- **Node.js**: >= 18 (앱은 >= 20)
- **pnpm**: 9.0.0
- **TypeScript**: 5.8.2

## 주의사항
1. 모든 앱은 Remix + Vite 구조를 따라야 함
2. UI 컴포넌트는 반드시 `@one-dawn/ui`를 통해 관리
3. 데이터베이스 스키마는 개별 파일로 분리하여 관리
4. 스타일링 시 `cn` 함수 사용 필수
5. 새 컴포넌트 추가 시 shadcn 명령어 사용 권장 