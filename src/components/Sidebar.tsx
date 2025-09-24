import { cn } from "./ui/utils";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, Component, Palette } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  selectedItem: string;
  onItemSelect: (item: string) => void;
  showHome: boolean;
}

const components = [
  'Button', 'Card', 'Input', 'Select', 'Checkbox', 'Switch', 'Slider',
  'Badge', 'Avatar', 'Alert', 'Dialog', 'Tooltip', 'Tabs', 'Accordion',
  'Table', 'Calendar', 'Progress', 'Separator'
];

const tokens = [
  'Colors', 'Typography', 'Spacing', 'Border Radius', 'Shadows', 'Icons'
];

export function Sidebar({ selectedItem, onItemSelect, showHome }: SidebarProps) {
  const [componentsOpen, setComponentsOpen] = useState(true);
  const [tokensOpen, setTokensOpen] = useState(true);

  return (
    <div className="w-64 border-r bg-muted/20 p-4">
      <div className="space-y-4">
        <Collapsible open={componentsOpen} onOpenChange={setComponentsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-start">
              <Component className="mr-2 h-4 w-4" />
              컴포넌트
              <ChevronDown className={cn(
                "ml-auto h-4 w-4 transition-transform",
                componentsOpen && "rotate-180"
              )} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 pl-6">
            {components.map((component) => (
              <Button
                key={component}
                variant={!showHome && selectedItem === component ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => onItemSelect(component)}
              >
                {component}
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={tokensOpen} onOpenChange={setTokensOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-start">
              <Palette className="mr-2 h-4 w-4" />
              디자인 토큰
              <ChevronDown className={cn(
                "ml-auto h-4 w-4 transition-transform",
                tokensOpen && "rotate-180"
              )} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 pl-6">
            {tokens.map((token) => (
              <Button
                key={token}
                variant={!showHome && selectedItem === token ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => onItemSelect(token)}
              >
                {token}
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}