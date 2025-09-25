import React from "react";

const components = [
  'Button', 'Card', 'Input', 'Select', 'Checkbox', 'Switch', 'Slider',
  'Badge', 'Avatar', 'Alert', 'Dialog', 'Tooltip', 'Tabs', 'Accordion',
  'Table', 'Calendar', 'Progress', 'Separator'
];

const tokens = [
  'Colors', 'Typography', 'Spacing', 'Border Radius', 'Shadows', 'Icons'
];

export function HomePage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl">
        <h1 className="text-3xl mb-4">오늘의집 디자인 시스템</h1>
        <p className="text-lg text-muted-foreground mb-8">
          오늘의집에서 사용하는 모든 UI 컴포넌트와 디자인 토큰을 확인할 수 있습니다. 
          왼쪽 사이드바에서 원하는 컴포넌트나 토큰을 선택하여 상세 정보와 사용 예시를 확인하세요.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">🧩 컴포넌트</h3>
            <p className="text-muted-foreground mb-4">
              재사용 가능한 UI 컴포넌트들의 사용법과 예시를 확인할 수 있습니다.
            </p>
            <p className="text-sm text-muted-foreground">
              {components.length}개의 컴포넌트 사용 가능
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-2">🎨 디자인 토큰</h3>
            <p className="text-muted-foreground mb-4">
              색상, 타이포그래피, 간격 등 디자인의 기본 요소들을 확인할 수 있습니다.
            </p>
            <p className="text-sm text-muted-foreground">
              {tokens.length}개의 토큰 카테고리 사용 가능
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}