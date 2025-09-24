import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Alert, AlertDescription } from "./ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { CodeBlock } from "./CodeBlock";
import { AlertCircle, Star } from "lucide-react";

interface ComponentShowcaseProps {
  component: string;
}

const componentExamples: Record<string, { 
  description: string; 
  examples: Array<{ title: string; component: JSX.Element; code: string }> 
}> = {
  Button: {
    description: "버튼은 사용자가 액션을 수행할 수 있게 하는 기본적인 상호작용 요소입니다.",
    examples: [
      {
        title: "기본 버튼",
        component: (
          <div className="flex gap-2">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        ),
        code: `<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`
      },
      {
        title: "크기 변형",
        component: (
          <div className="flex items-center gap-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        ),
        code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`
      }
    ]
  },
  Card: {
    description: "카드는 관련된 콘텐츠를 그룹화하여 표시하는 컨테이너입니다.",
    examples: [
      {
        title: "기본 카드",
        component: (
          <Card className="w-80">
            <CardHeader>
              <CardTitle>카드 제목</CardTitle>
              <CardDescription>카드에 대한 설명입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>카드의 주요 콘텐츠가 여기에 들어갑니다.</p>
            </CardContent>
          </Card>
        ),
        code: `<Card>
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드에 대한 설명입니다.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>카드의 주요 콘텐츠가 여기에 들어갑니다.</p>
  </CardContent>
</Card>`
      }
    ]
  },
  Input: {
    description: "사용자로부터 텍스트 입력을 받는 폼 요소입니다.",
    examples: [
      {
        title: "기본 입력 필드",
        component: (
          <div className="space-y-2 w-80">
            <Input placeholder="이메일을 입력하세요" />
            <Input type="password" placeholder="비밀번호" />
            <Input disabled placeholder="비활성화된 입력" />
          </div>
        ),
        code: `<Input placeholder="이메일을 입력하세요" />
<Input type="password" placeholder="비밀번호" />
<Input disabled placeholder="비활성화된 입력" />`
      }
    ]
  },
  Select: {
    description: "드롭다운 형태로 옵션을 선택할 수 있는 컴포넌트입니다.",
    examples: [
      {
        title: "기본 셀렉트",
        component: (
          <Select>
            <SelectTrigger className="w-80">
              <SelectValue placeholder="옵션을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">옵션 1</SelectItem>
              <SelectItem value="option2">옵션 2</SelectItem>
              <SelectItem value="option3">옵션 3</SelectItem>
            </SelectContent>
          </Select>
        ),
        code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="옵션을 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">옵션 1</SelectItem>
    <SelectItem value="option2">옵션 2</SelectItem>
    <SelectItem value="option3">옵션 3</SelectItem>
  </SelectContent>
</Select>`
      }
    ]
  },
  Badge: {
    description: "상태나 카테고리를 나타내는 작은 라벨입니다.",
    examples: [
      {
        title: "뱃지 변형",
        component: (
          <div className="flex gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        ),
        code: `<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`
      }
    ]
  },
  Avatar: {
    description: "사용자의 프로필 이미지를 표시하는 컴포넌트입니다.",
    examples: [
      {
        title: "아바타 예시",
        component: (
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        ),
        code: `<Avatar>
  <AvatarImage src="profile-image.jpg" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`
      }
    ]
  },
  Alert: {
    description: "중요한 정보나 상태를 사용자에게 알리는 컴포넌트입니다.",
    examples: [
      {
        title: "기본 알림",
        component: (
          <Alert className="w-80">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              이것은 중요한 알림 메시지입니다.
            </AlertDescription>
          </Alert>
        ),
        code: `<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertDescription>
    이것은 중요한 알림 메시지입니다.
  </AlertDescription>
</Alert>`
      }
    ]
  },
  Switch: {
    description: "켜짐/꺼짐 상태를 토글할 수 있는 스위치입니다.",
    examples: [
      {
        title: "기본 스위치",
        component: (
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <label htmlFor="airplane-mode">비행기 모드</label>
          </div>
        ),
        code: `<Switch id="airplane-mode" />
<label htmlFor="airplane-mode">비행기 모드</label>`
      }
    ]
  },
  Checkbox: {
    description: "하나 또는 여러 개의 옵션을 선택할 수 있는 체크박스입니다.",
    examples: [
      {
        title: "기본 체크박스",
        component: (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms">약관에 동의합니다</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" />
              <label htmlFor="marketing">마케팅 정보 수신에 동의합니다</label>
            </div>
          </div>
        ),
        code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">약관에 동의합니다</label>
</div>`
      }
    ]
  },
  Slider: {
    description: "범위 내에서 값을 선택할 수 있는 슬라이더입니다.",
    examples: [
      {
        title: "기본 슬라이더",
        component: (
          <div className="w-80">
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        ),
        code: `<Slider defaultValue={[50]} max={100} step={1} />`
      }
    ]
  },
  Tabs: {
    description: "콘텐츠를 탭으로 구분하여 표시하는 컴포넌트입니다.",
    examples: [
      {
        title: "기본 탭",
        component: (
          <Tabs defaultValue="tab1" className="w-80">
            <TabsList>
              <TabsTrigger value="tab1">탭 1</TabsTrigger>
              <TabsTrigger value="tab2">탭 2</TabsTrigger>
              <TabsTrigger value="tab3">탭 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">첫 번째 탭의 콘텐츠입니다.</TabsContent>
            <TabsContent value="tab2">두 번째 탭의 콘텐츠입니다.</TabsContent>
            <TabsContent value="tab3">세 번째 탭의 콘텐츠입니다.</TabsContent>
          </Tabs>
        ),
        code: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">탭 1</TabsTrigger>
    <TabsTrigger value="tab2">탭 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">첫 번째 탭의 콘텐츠</TabsContent>
  <TabsContent value="tab2">두 번째 탭의 콘텐츠</TabsContent>
</Tabs>`
      }
    ]
  },
  Progress: {
    description: "작업의 진행 상황을 시각적으로 표시하는 컴포넌트입니다.",
    examples: [
      {
        title: "기본 프로그레스",
        component: (
          <div className="w-80 space-y-2">
            <Progress value={33} />
            <Progress value={66} />
            <Progress value={100} />
          </div>
        ),
        code: `<Progress value={33} />
<Progress value={66} />
<Progress value={100} />`
      }
    ]
  },
  Separator: {
    description: "콘텐츠를 시각적으로 구분하는 구분선입니다.",
    examples: [
      {
        title: "기본 구분선",
        component: (
          <div className="w-80">
            <p>첫 번째 섹션</p>
            <Separator className="my-4" />
            <p>두 번째 섹션</p>
          </div>
        ),
        code: `<p>첫 번째 섹션</p>
<Separator className="my-4" />
<p>두 번째 섹션</p>`
      }
    ]
  }
};

export function ComponentShowcase({ component }: ComponentShowcaseProps) {
  const componentData = componentExamples[component];

  if (!componentData) {
    return (
      <div className="p-6">
        <h2 className="text-2xl mb-4">{component}</h2>
        <p className="text-muted-foreground">이 컴포넌트에 대한 예시가 준비 중입니다.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl mb-2">{component}</h2>
        <p className="text-muted-foreground">{componentData.description}</p>
      </div>

      {componentData.examples.map((example, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-lg">{example.title}</h3>
          
          <div className="border rounded-lg p-6 bg-background">
            {example.component}
          </div>

          <CodeBlock code={example.code} />
        </div>
      ))}
    </div>
  );
}