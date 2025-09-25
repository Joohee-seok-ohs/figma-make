import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CodeBlock } from "./CodeBlock";

interface TokenShowcaseProps {
  token: string;
}

const colorTokens = [
  { name: 'Primary', value: '#0aa5ff', css: 'bg-primary', description: '오늘의집 메인 브랜드 컬러 (foreground brand)' },
  { name: 'Secondary', value: '#f7f9fa', css: 'bg-secondary', description: '보조 배경 컬러 (background weak)' },
  { name: 'Accent', value: '#e5f6ff', css: 'bg-accent', description: '강조 컬러 (background emphasis weak)' },
  { name: 'Muted', value: '#eaedef', css: 'bg-muted', description: '비활성 배경 컬러 (background disabled)' },
  { name: 'Attention', value: '#bc7e02', css: 'bg-attention', description: '주의 컬러 (foreground attention)' },
  { name: 'Success', value: '#12b667', css: 'bg-success', description: '성공 컬러 (foreground brand o2oResponsibility)' },
  { name: 'Warning', value: '#bc7e02', css: 'bg-warning', description: '경고 컬러 (foreground attention)' },
  { name: 'Info', value: '#0aa5ff', css: 'bg-info', description: '정보 컬러 (foreground brand)' },
  { name: 'Background', value: '#ffffff', css: 'bg-background border', description: '메인 배경 컬러 (background)' },
  { name: 'Foreground', value: '#2f3438', css: 'bg-foreground', description: '메인 텍스트 컬러 (foreground)' },
  { name: 'Border', value: '#e6e6e6', css: 'bg-transparent border-4 border-border', description: '테두리 컬러 (border)' },
  { name: 'Destructive', value: '#f05656', css: 'bg-destructive', description: '경고/에러 컬러 (foreground critical)' },
];

const typographyTokens = [
  { name: 'Headline 1', element: 'h1', description: '메인 페이지 제목 (32px, Semibold, Pretendard)' },
  { name: 'Headline 2', element: 'h2', description: '섹션 제목 (24px, Semibold, Pretendard)' },
  { name: 'Title 1', element: 'h3', description: '제목 1 (20px, Semibold, Pretendard)' },
  { name: 'Title 2', element: 'h4', description: '제목 2 (18px, Semibold, Pretendard)' },
  { name: 'Title 3', element: 'h5', description: '제목 3 (17px, Medium, Pretendard)' },
  { name: 'Body 1', element: 'p', description: '본문 1 (16px, Regular, Pretendard)' },
  { name: 'Body 2', element: 'p', description: '본문 2 (15px, Regular, Pretendard)' },
  { name: 'Body 3', element: 'p', description: '본문 3 (14px, Regular, Pretendard)' },
  { name: 'Label 1', element: 'label', description: '라벨 1 (13px, Medium, Pretendard)' },
  { name: 'Label 2', element: 'label', description: '라벨 2 (12px, Medium, Pretendard)' },
  { name: 'Caption 1', element: 'small', description: '캡션 1 (11px, Regular, Pretendard)' },
  { name: 'Caption 2', element: 'small', description: '캡션 2 (10px, Regular, Pretendard)' },
  { name: 'Code', element: 'code', description: '코드 텍스트 (14px, Regular, JetBrains Mono)' },
];

const spacingTokens = [
  { name: 'xs', value: '0.25rem', size: '4px' },
  { name: 'sm', value: '0.5rem', size: '8px' },
  { name: 'md', value: '1rem', size: '16px' },
  { name: 'lg', value: '1.5rem', size: '24px' },
  { name: 'xl', value: '2rem', size: '32px' },
  { name: '2xl', value: '3rem', size: '48px' },
];

const radiusTokens = [
  { name: 'sm', value: 'calc(var(--radius) - 4px)', css: 'rounded-sm' },
  { name: 'md', value: 'calc(var(--radius) - 2px)', css: 'rounded-md' },
  { name: 'lg', value: 'var(--radius)', css: 'rounded-lg' },
  { name: 'xl', value: 'calc(var(--radius) + 4px)', css: 'rounded-xl' },
];

export function TokenShowcase({ token }: TokenShowcaseProps) {
  const renderColors = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl mb-2">Colors</h2>
        <p className="text-muted-foreground">디자인 시스템에서 사용되는 색상 팔레트입니다.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {colorTokens.map((color) => (
          <Card key={color.name}>
            <CardContent className="p-4">
              <div className={`w-full h-16 rounded-md mb-2 ${color.css}`}></div>
              <div className="space-y-1">
                <p className="font-medium">{color.name}</p>
                <p className="text-sm text-muted-foreground font-mono">{color.value}</p>
                <p className="text-xs text-muted-foreground">{color.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <CodeBlock 
        code={`/* 오늘의집 시맨틱 컬러 토큰 */
:root {
  --primary: #0aa5ff;        /* foreground brand - 메인 브랜드 컬러 */
  --secondary: #f7f9fa;       /* background weak - 보조 배경 */
  --accent: #e5f6ff;          /* background emphasis weak - 강조 컬러 */
  --muted: #f7f9fa;          /* background weak - 비활성 컬러 */
  --background: #ffffff;      /* background - 메인 배경 */
  --foreground: #2f3438;      /* foreground - 메인 텍스트 */
  --border: #e6e6e6;          /* border - 테두리 */
  --destructive: #f05656;     /* foreground critical - 경고/에러 */
}

/* 다크 모드 */
.dark {
  --background: #0e0e0e;      /* background (다크) */
  --foreground: #f5f5f5;      /* foreground (다크) */
  --primary: #0aa5ff;         /* foreground brand (동일) */
  --secondary: #141414;       /* background weak (다크) */
  --accent: #0e2b5b;          /* background emphasis weak (다크) */
  --destructive: #fd2840;     /* foreground critical (다크) */
}

/* Tailwind Classes */
.bg-primary { background-color: var(--primary); }
.bg-secondary { background-color: var(--secondary); }
.text-foreground { color: var(--foreground); }`}
        language="css"
      />
    </div>
  );

  const renderTypography = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl mb-2">Typography</h2>
        <p className="text-muted-foreground">텍스트 스타일과 계층 구조를 정의합니다.</p>
      </div>

      <div className="space-y-4">
        {typographyTokens.map((typo) => {
          return (
            <Card key={typo.name}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Badge variant="outline">{typo.element}</Badge>
                    <h3 className="font-medium mt-2">{typo.name}</h3>
                    <p className="text-sm text-muted-foreground">{typo.description}</p>
                  </div>
                </div>
                {typo.element === 'h1' && <h1>이것은 {typo.name} 스타일의 예시입니다.</h1>}
                {typo.element === 'h2' && <h2>이것은 {typo.name} 스타일의 예시입니다.</h2>}
                {typo.element === 'h3' && <h3>이것은 {typo.name} 스타일의 예시입니다.</h3>}
                {typo.element === 'h4' && <h4>이것은 {typo.name} 스타일의 예시입니다.</h4>}
                {typo.element === 'h5' && <h5>이것은 {typo.name} 스타일의 예시입니다.</h5>}
                {typo.element === 'h6' && <h6>이것은 {typo.name} 스타일의 예시입니다.</h6>}
                {typo.element === 'p' && <p>이것은 {typo.name} 스타일의 예시입니다. 오늘의집 디자인 시스템에 따라 28px 크기와 1.6 줄 간격으로 설정되어 있습니다.</p>}
                {typo.element === 'label' && <label>이것은 {typo.name} 스타일의 예시입니다.</label>}
                {typo.element === 'small' && <small>이것은 {typo.name} 스타일의 예시입니다.</small>}
                {typo.element === 'code' && <code>이것은 {typo.name} 스타일의 예시입니다.</code>}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <CodeBlock 
        code={`/* 오늘의집 타이포그래피 시스템 */
:root {
  /* 폰트 패밀리 */
  --font-family-primary: 'Pretendard Variable', 'Pretendard', sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;
  
  /* 오늘의집 폰트 크기 토큰 */
  --text-caption-2: 0.625rem;   /* 10px */
  --text-caption-1: 0.6875rem;  /* 11px */
  --text-label-2: 0.75rem;      /* 12px */
  --text-label-1: 0.8125rem;    /* 13px */
  --text-body-3: 0.875rem;      /* 14px */
  --text-body-2: 0.9375rem;     /* 15px */
  --text-body-1: 1rem;          /* 16px */
  --text-title-3: 1.0625rem;    /* 17px */
  --text-title-2: 1.125rem;     /* 18px */
  --text-title-1: 1.25rem;      /* 20px */
  --text-headline-2: 1.5rem;    /* 24px */
  --text-headline-1: 2rem;      /* 32px */
  
  /* 폰트 굵기 */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* 오늘의집 줄 간격 토큰 (티셔츠 사이즈) */
  --line-height-xs: 0.875rem;    /* 14px */
  --line-height-sm: 1.125rem;    /* 18px */
  --line-height-md: 1.25rem;     /* 20px */
  --line-height-lg: 1.5rem;      /* 24px */
  --line-height-xl: 1.75rem;     /* 28px */
  --line-height-2xl: 2rem;       /* 32px */
  --line-height-3xl: 2.625rem;   /* 42px */
  
  /* 글자 간격 */
  --letter-spacing-default: -0.3px;
  
  /* 오늘의집 시맨틱 컬러 토큰 */
  --background: #ffffff;
  --foreground: #2f3438;
  --primary: #0aa5ff;
  --primary-foreground: #ffffff;
  --secondary: #f7f9fa;
  --secondary-foreground: #2f3438;
  --accent: #e5f6ff;
  --accent-foreground: #2f3438;
  --muted: #eaedef;
  --muted-foreground: #c2c8cc;
  --attention: #bc7e02;
  --success: #12b667;
  --warning: #bc7e02;
  --info: #0aa5ff;
  --destructive: #f05656;
  --destructive-foreground: #ffffff;
  --border: #e6e6e6;
}

/* 타이포그래피 스타일 */
h1 {
  font-family: var(--font-family-primary);
  font-size: var(--text-headline-1);    /* 32px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-3xl);   /* 42px */
  letter-spacing: var(--letter-spacing-default);
  color: var(--foreground);
}

h2 {
  font-family: var(--font-family-primary);
  font-size: var(--text-headline-2);    /* 24px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-2xl);   /* 32px */
  letter-spacing: var(--letter-spacing-default);
  color: var(--foreground);
}

p {
  font-family: var(--font-family-primary);
  font-size: var(--text-body-1);      /* 16px */
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xl);   /* 28px */
  letter-spacing: var(--letter-spacing-default);
  color: var(--foreground);
}`}
        language="css"
      />
    </div>
  );

  const renderSpacing = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl mb-2">Spacing</h2>
        <p className="text-muted-foreground">일관된 여백과 간격을 위한 스페이싱 토큰입니다.</p>
      </div>

      <div className="space-y-4">
        {spacingTokens.map((spacing) => (
          <Card key={spacing.name}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 text-sm font-mono">{spacing.name}</div>
                <div className="w-20 text-sm text-muted-foreground">{spacing.size}</div>
                <div className="flex-1">
                  <div 
                    className="bg-primary h-4 rounded"
                    style={{ width: spacing.value }}
                  ></div>
                </div>
                <div className="text-sm font-mono text-muted-foreground">{spacing.value}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <CodeBlock 
        code={`/* Spacing Tokens */
.space-xs { margin: 0.25rem; }  /* 4px */
.space-sm { margin: 0.5rem; }   /* 8px */
.space-md { margin: 1rem; }     /* 16px */
.space-lg { margin: 1.5rem; }   /* 24px */
.space-xl { margin: 2rem; }     /* 32px */

/* Tailwind Usage */
.p-4  /* padding: 1rem */
.m-2  /* margin: 0.5rem */
.gap-6 /* gap: 1.5rem */`}
        language="css"
      />
    </div>
  );

  const renderBorderRadius = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl mb-2">Border Radius</h2>
        <p className="text-muted-foreground">모서리 둥글기를 위한 반지름 값들입니다.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {radiusTokens.map((radius) => (
          <Card key={radius.name}>
            <CardContent className="p-6">
              <div className={`w-16 h-16 bg-primary mb-4 ${radius.css}`}></div>
              <div className="space-y-1">
                <p className="font-medium">{radius.name}</p>
                <p className="text-sm text-muted-foreground font-mono">{radius.value}</p>
                <Badge variant="outline" className="text-xs">{radius.css}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <CodeBlock 
        code={`/* Border Radius Tokens */
:root {
  --radius: 0.625rem; /* 10px */
}

.rounded-sm { border-radius: calc(var(--radius) - 4px); }
.rounded-md { border-radius: calc(var(--radius) - 2px); }
.rounded-lg { border-radius: var(--radius); }
.rounded-xl { border-radius: calc(var(--radius) + 4px); }`}
        language="css"
      />
    </div>
  );

  const renderShadows = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl mb-2">Shadows</h2>
        <p className="text-muted-foreground">깊이감과 계층을 표현하는 그림자 효과입니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Small', class: 'shadow-sm', description: '미세한 그림자' },
          { name: 'Medium', class: 'shadow-md', description: '중간 그림자' },
          { name: 'Large', class: 'shadow-lg', description: '큰 그림자' },
          { name: 'Extra Large', class: 'shadow-xl', description: '아주 큰 그림자' },
        ].map((shadow) => (
          <Card key={shadow.name}>
            <CardContent className="p-6">
              <div className={`w-full h-20 bg-background border rounded-lg mb-4 ${shadow.class}`}></div>
              <div className="space-y-1">
                <p className="font-medium">{shadow.name}</p>
                <p className="text-sm text-muted-foreground">{shadow.description}</p>
                <Badge variant="outline" className="text-xs">{shadow.class}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderIcons = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl mb-2">Icons</h2>
        <p className="text-muted-foreground">Lucide React 아이콘 라이브러리를 사용합니다.</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <p className="mb-4">아이콘은 일관된 크기와 스타일로 사용해야 합니다:</p>
          <ul className="space-y-2 text-sm">
            <li>• 기본 크기: 16px (h-4 w-4)</li>
            <li>• 버튼 내부: 16px (h-4 w-4)</li>
            <li>• 제목 옆: 20px (h-5 w-5)</li>
            <li>• 큰 아이콘: 24px (h-6 w-6)</li>
          </ul>
        </CardContent>
      </Card>

      <CodeBlock 
        code={`import { Search, User, Settings, Home } from "lucide-react";

// 사용 예시
<Search className="h-4 w-4" />
<User className="h-5 w-5" />
<Settings className="h-6 w-6" />

// 버튼과 함께
<Button>
  <Search className="h-4 w-4 mr-2" />
  검색
</Button>`}
        language="tsx"
      />
    </div>
  );

  switch (token) {
    case 'Colors':
      return <div className="p-6 space-y-8">{renderColors()}</div>;
    case 'Typography':
      return <div className="p-6 space-y-8">{renderTypography()}</div>;
    case 'Spacing':
      return <div className="p-6 space-y-8">{renderSpacing()}</div>;
    case 'Border Radius':
      return <div className="p-6 space-y-8">{renderBorderRadius()}</div>;
    case 'Shadows':
      return <div className="p-6 space-y-8">{renderShadows()}</div>;
    case 'Icons':
      return <div className="p-6 space-y-8">{renderIcons()}</div>;
    default:
      return (
        <div className="p-6">
          <h2 className="text-2xl mb-4">{token}</h2>
          <p className="text-muted-foreground">이 토큰에 대한 문서가 준비 중입니다.</p>
        </div>
      );
  }
}