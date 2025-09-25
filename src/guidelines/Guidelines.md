# 오늘의집 디자인 시스템 가이드라인

## 컬러 시스템 관리

### 디자인별 컬러 우선순위
1. **피그마 디자인 컬러가 최우선**: 디자이너가 피그마에서 전달한 컬러 값이 CSS 변수보다 우선시되어야 함
2. **CSS 변수 오버라이드**: 디자인별 컬러는 `globals.css`의 기본 컬러를 오버라이드해야 함
3. **클래스 기반 컬러 시스템**: 디자인별 컬러는 특정 클래스로 구분하여 적용

### 컬러 적용 방법

#### 1. 기본 컬러 (globals.css에 정의된 컬러)
```html
<!-- globals.css에 정의된 컬러는 기존 클래스 사용 -->
<button class="bg-primary text-primary-foreground">기본 버튼</button>
<div class="bg-background border-border text-foreground">기본 카드</div>
```

#### 2. 피그마 전용 컬러 (globals.css에 없는 컬러)
```html
<!-- globals.css에 없는 피그마 전용 컬러만 arbitrary value 사용 -->
<button class="bg-[#ff6b35] text-white hover:bg-[#e55a2b]">
  피그마 전용 버튼
</button>

<div class="bg-[#f8f9fa] border-[#e6e6e6] text-[#2f3438]">
  피그마 전용 카드
</div>
```

### 사용법
- **기본 컬러**: `bg-primary`, `text-foreground` 등 globals.css 컬러 우선 사용
- **피그마 전용 컬러**: globals.css에 없는 컬러만 `bg-[#ff6b35]` 형태로 사용
- **혼합 사용**: 기본 컬러 + 피그마 전용 컬러 조합 가능

