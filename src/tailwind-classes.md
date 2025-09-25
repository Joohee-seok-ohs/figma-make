# Tailwind CSS 자동 생성 클래스 목록

## 🎨 **컬러 관련 클래스**

### **Background 클래스**
```css
.bg-background { background-color: var(--background); }
.bg-foreground { background-color: var(--foreground); }
.bg-card { background-color: var(--card); }
.bg-card-foreground { background-color: var(--card-foreground); }
.bg-popover { background-color: var(--popover); }
.bg-popover-foreground { background-color: var(--popover-foreground); }
.bg-primary { background-color: var(--primary); }
.bg-primary-foreground { background-color: var(--primary-foreground); }
.bg-secondary { background-color: var(--secondary); }
.bg-secondary-foreground { background-color: var(--secondary-foreground); }
.bg-muted { background-color: var(--muted); }
.bg-muted-foreground { background-color: var(--muted-foreground); }
.bg-accent { background-color: var(--accent); }
.bg-accent-foreground { background-color: var(--accent-foreground); }
.bg-destructive { background-color: var(--destructive); }
.bg-destructive-foreground { background-color: var(--destructive-foreground); }
.bg-attention { background-color: var(--attention); }
.bg-attention-foreground { background-color: var(--attention-foreground); }
.bg-success { background-color: var(--success); }
.bg-success-foreground { background-color: var(--success-foreground); }
.bg-warning { background-color: var(--warning); }
.bg-warning-foreground { background-color: var(--warning-foreground); }
.bg-info { background-color: var(--info); }
.bg-info-foreground { background-color: var(--info-foreground); }
```

### **Text 클래스**
```css
.text-background { color: var(--background); }
.text-foreground { color: var(--foreground); }
.text-card { color: var(--card); }
.text-card-foreground { color: var(--card-foreground); }
.text-popover { color: var(--popover); }
.text-popover-foreground { color: var(--popover-foreground); }
.text-primary { color: var(--primary); }
.text-primary-foreground { color: var(--primary-foreground); }
.text-secondary { color: var(--secondary); }
.text-secondary-foreground { color: var(--secondary-foreground); }
.text-muted { color: var(--muted); }
.text-muted-foreground { color: var(--muted-foreground); }
.text-accent { color: var(--accent); }
.text-accent-foreground { color: var(--accent-foreground); }
.text-destructive { color: var(--destructive); }
.text-destructive-foreground { color: var(--destructive-foreground); }
.text-attention { color: var(--attention); }
.text-attention-foreground { color: var(--attention-foreground); }
.text-success { color: var(--success); }
.text-success-foreground { color: var(--success-foreground); }
.text-warning { color: var(--warning); }
.text-warning-foreground { color: var(--warning-foreground); }
.text-info { color: var(--info); }
.text-info-foreground { color: var(--info-foreground); }
```

### **Border 클래스**
```css
.border-background { border-color: var(--background); }
.border-foreground { border-color: var(--foreground); }
.border-card { border-color: var(--card); }
.border-card-foreground { border-color: var(--card-foreground); }
.border-popover { border-color: var(--popover); }
.border-popover-foreground { border-color: var(--popover-foreground); }
.border-primary { border-color: var(--primary); }
.border-primary-foreground { border-color: var(--primary-foreground); }
.border-secondary { border-color: var(--secondary); }
.border-secondary-foreground { border-color: var(--secondary-foreground); }
.border-muted { border-color: var(--muted); }
.border-muted-foreground { border-color: var(--muted-foreground); }
.border-accent { border-color: var(--accent); }
.border-accent-foreground { border-color: var(--accent-foreground); }
.border-destructive { border-color: var(--destructive); }
.border-destructive-foreground { border-color: var(--destructive-foreground); }
.border-attention { border-color: var(--attention); }
.border-attention-foreground { border-color: var(--attention-foreground); }
.border-success { border-color: var(--success); }
.border-success-foreground { border-color: var(--success-foreground); }
.border-warning { border-color: var(--warning); }
.border-warning-foreground { border-color: var(--warning-foreground); }
.border-info { border-color: var(--info); }
.border-info-foreground { border-color: var(--info-foreground); }
```

## 🎯 **기타 유용한 클래스**

### **Ring 클래스**
```css
.ring-primary { --tw-ring-color: var(--primary); }
.ring-secondary { --tw-ring-color: var(--secondary); }
.ring-destructive { --tw-ring-color: var(--destructive); }
```

### **Chart 클래스**
```css
.chart-1 { color: var(--chart-1); }
.chart-2 { color: var(--chart-2); }
.chart-3 { color: var(--chart-3); }
.chart-4 { color: var(--chart-4); }
.chart-5 { color: var(--chart-5); }
```

### **Sidebar 클래스**
```css
.bg-sidebar { background-color: var(--sidebar); }
.text-sidebar-foreground { color: var(--sidebar-foreground); }
.bg-sidebar-primary { background-color: var(--sidebar-primary); }
.text-sidebar-primary-foreground { color: var(--sidebar-primary-foreground); }
.bg-sidebar-accent { background-color: var(--sidebar-accent); }
.text-sidebar-accent-foreground { color: var(--sidebar-accent-foreground); }
.border-sidebar { border-color: var(--sidebar-border); }
.ring-sidebar { --tw-ring-color: var(--sidebar-ring); }
```

## 📝 **사용 예시**

### **버튼 스타일링**
```html
<!-- Primary 버튼 -->
<button class="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary 버튼
</button>

<!-- Secondary 버튼 -->
<button class="bg-secondary text-secondary-foreground hover:bg-secondary/80">
  Secondary 버튼
</button>

<!-- Destructive 버튼 -->
<button class="bg-destructive text-destructive-foreground hover:bg-destructive/90">
  삭제 버튼
</button>
```

### **카드 스타일링**
```html
<!-- 기본 카드 -->
<div class="bg-card text-card-foreground border border-border rounded-lg p-4">
  기본 카드
</div>

<!-- 강조 카드 -->
<div class="bg-accent text-accent-foreground border border-accent rounded-lg p-4">
  강조 카드
</div>
```

### **텍스트 스타일링**
```html
<!-- 메인 텍스트 -->
<p class="text-foreground">메인 텍스트</p>

<!-- 보조 텍스트 -->
<p class="text-muted-foreground">보조 텍스트</p>

<!-- 강조 텍스트 -->
<p class="text-primary">강조 텍스트</p>
```

## 🔧 **CSS 변수 수정 방법**

### **전체 색상 변경**
```css
:root {
  --primary: #ff6b35;        /* 새 브랜드 컬러 */
  --primary-foreground: #ffffff;  /* 대비 색상 */
}
```

### **다크 모드 색상 변경**
```css
.dark {
  --primary: #ff8c42;        /* 다크 모드용 색상 */
  --primary-foreground: #000000;  /* 다크 모드 대비 색상 */
}
```

## 📋 **주의사항**

1. **CSS 변수만 수정**: 클래스명은 변경하지 말고 CSS 변수 값만 수정
2. **일관성 유지**: 관련된 foreground 색상도 함께 조정
3. **접근성 고려**: 색상 대비율 확인 (WCAG 가이드라인)
4. **테스트**: 라이트/다크 모드 모두에서 확인

---

**결론**: 이 클래스들은 Tailwind CSS가 자동으로 생성하며, CSS 변수 값을 수정하면 모든 관련 클래스가 자동으로 업데이트됩니다! 🎨✨
