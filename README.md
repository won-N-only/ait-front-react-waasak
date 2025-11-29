# 🍎 와삭 과일 미니앱

MBTI 스타일로 알아보는 나와 꼭 닮은 과일 유형 테스트 웹 애플리케이션입니다.

## 📋 목차

- [기능 소개](#기능-소개)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [빌드 및 배포](#빌드-및-배포)
- [주요 기능](#주요-기능)

## ✨ 기능 소개

- **MBTI 기반 과일 테스트**: 6개의 질문을 통해 자신의 성격 유형에 맞는 과일을 찾아보세요
- **결과 분석**: MBTI 유형별 상세한 설명과 함께 나와 잘 맞는 과일 추천
- **제철 과일 추천**: 현재 시즌에 맞는 과일을 확인하고 구매할 수 있습니다
- **반응형 디자인**: 모바일과 데스크톱 환경 모두에서 최적화된 UI/UX

## 🛠 기술 스택

### 핵심 기술
- **React 18.2** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구 및 개발 서버

### UI/스타일링
- **@toss/tds-mobile** - Toss Design System 컴포넌트
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Emotion** - CSS-in-JS 라이브러리

### 개발 도구
- **ESLint** - 코드 품질 관리
- **PostCSS** - CSS 후처리
- **Granite** - 개발 환경 설정

## 📁 프로젝트 구조

```
src/
├── assets/              # 이미지 리소스
│   ├── grapes.png
│   ├── mandarin.png
│   ├── melon.png
│   ├── orange.png
│   ├── pear.png
│   └── tangerine.png
├── components/          # React 컴포넌트
│   ├── ErrorToast.tsx   # 에러 토스트 메시지
│   ├── Footer.tsx       # 푸터 컴포넌트
│   ├── Header.tsx       # 헤더 및 네비게이션
│   ├── Home.tsx         # 홈 페이지
│   ├── Result.tsx       # 테스트 결과 페이지
│   ├── Seasonal.tsx     # 제철 과일 페이지
│   ├── SeasonalCard.tsx # 제철 과일 카드
│   └── Test.tsx         # 테스트 페이지
├── constants/           # 상수 데이터
│   ├── fruits.ts        # 과일 정보
│   ├── mbtiProfiles.ts  # MBTI 프로필 데이터
│   └── questions.ts     # 테스트 질문
├── hooks/               # 커스텀 훅
│   ├── useNavigation.ts # 브라우저 네비게이션 처리
│   └── useTest.ts       # 테스트 상태 관리
├── types/               # TypeScript 타입 정의
│   └── index.ts
├── utils/               # 유틸리티 함수
│   ├── mbti.ts          # MBTI 계산 로직
│   └── purchase.ts      # 구매 URL 생성
├── App.tsx              # 메인 앱 컴포넌트
├── main.tsx             # 앱 진입점
└── index.css            # 글로벌 스타일
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 일반 개발 서버
npm run dev

# Granite 개발 서버
npm run granite:dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173` (또는 표시된 포트)로 접속할 수 있습니다.

## 📦 빌드 및 배포

### 프로덕션 빌드

```bash
# TypeScript 타입 체크 + 빌드
npm run build

# Granite 빌드
npm run granite:build
```

빌드된 파일은 `dist/` 디렉토리에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

### 린트

```bash
npm run lint
```

## 🎯 주요 기능

### 1. MBTI 테스트
- 6개의 질문으로 성격 유형 분석
- 실시간 진행 상황 표시
- 이전 질문으로 돌아가기 가능
- 브라우저 뒤로가기 지원

### 2. 결과 페이지
- MBTI 유형별 맞춤 과일 추천
- 상세한 성격 분석 설명
- 잘 맞는 과일 추천
- 스마트스토어 구매 링크

### 3. 제철 과일 추천
- 시즌별 추천 과일 목록
- 각 과일의 특징 및 설명
- 개별 구매 링크 제공

### 4. 사용자 경험
- 부드러운 페이지 전환 애니메이션
- 반응형 디자인 (모바일/데스크톱)
- 에러 메시지 토스트 알림
- 직관적인 네비게이션

## 📝 코드 구조 특징

### 모듈화된 아키텍처
- **컴포넌트**: 재사용 가능한 UI 컴포넌트로 분리
- **훅**: 비즈니스 로직을 커스텀 훅으로 분리
- **유틸리티**: 순수 함수로 구성된 유틸리티 모듈
- **상수**: 데이터와 설정값을 별도 파일로 관리

### 성능 최적화
- `useCallback`을 활용한 함수 메모이제이션
- 불필요한 리렌더링 방지
- 효율적인 상태 관리

## 🔗 관련 링크

- [Toss Design System](https://toss.github.io/slash/)
- [Vite 공식 문서](https://vitejs.dev/)
- [React 공식 문서](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📄 라이선스

이 프로젝트는 private 프로젝트입니다.

---

© 2025 와삭 과일 미니앱

