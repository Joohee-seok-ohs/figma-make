import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CodeBlock } from "./CodeBlock";

interface TokenShowcaseProps {
  token: string;
}

const colorTokens = [
  { name: 'Primary', value: 'var(--primary)', css: 'bg-primary' },
  { name: 'Secondary', value: 'var(--secondary)', css: 'bg-secondary' },
  { name: 'Accent', value: 'var(--accent)', css: 'bg-accent' },
  { name: 'Muted', value: 'var(--muted)', css: 'bg-muted' },
  { name: 'Background', value: 'var(--background)', css: 'bg-background border' },
  { name: 'Foreground', value: 'var(--foreground)', css: 'bg-foreground' },
  { name: 'Border', value: 'var(--border)', css: 'bg-transparent border-4 border-border' },
  { name: 'Destructive', value: 'var(--destructive)', css: 'bg-destructive' },
];

const typographyTokens = [
  { name: 'Heading 1', element: 'h1', description: '메인 페이지 제목' },
  { name: 'Heading 2', element: 'h2', description: '섹션 제목' },
  { name: 'Heading 3', element: 'h3', description: '하위 섹션 제목' },
  { name: 'Paragraph', element: 'p', description: '본문 텍스트' },
  { name: 'Label', element: 'label', description: '폼 라벨' },
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <CodeBlock 
        code={`/* CSS Variables */
:root {
  --primary: #030213;
  --secondary: oklch(0.95 0.0058 264.53);
  --accent: #e9ebef;
  --muted: #ececf0;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --border: rgba(0, 0, 0, 0.1);
  --destructive: #d4183d;
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
          const Element = typo.element as keyof JSX.IntrinsicElements;
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
                <Element>이것은 {typo.name} 스타일의 예시입니다.</Element>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <CodeBlock 
        code={`/* Typography Styles */
h1 {
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

h2 {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

p {
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: 1.5;
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