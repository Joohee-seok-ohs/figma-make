import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ComponentShowcase } from "./components/ComponentShowcase";
import { TokenShowcase } from "./components/TokenShowcase";
import { HomePage } from "./components/HomePage";

const components = [
  'Button', 'Card', 'Input', 'Select', 'Checkbox', 'Switch', 'Slider',
  'Badge', 'Avatar', 'Alert', 'Dialog', 'Tooltip', 'Tabs', 'Accordion',
  'Table', 'Calendar', 'Progress', 'Separator'
];

const tokens = [
  'Colors', 'Typography', 'Spacing', 'Border Radius', 'Shadows', 'Icons'
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState('Button');
  const [showHome, setShowHome] = useState(false);

  const isComponent = components.includes(selectedItem);
  const isToken = tokens.includes(selectedItem);

  const handleHomeClick = () => {
    setShowHome(true);
  };

  const handleItemSelect = (item: string) => {
    setShowHome(false);
    setSelectedItem(item);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onHomeClick={handleHomeClick} />
      <div className="flex">
        <Sidebar selectedItem={selectedItem} onItemSelect={handleItemSelect} showHome={showHome} />
        <main className="flex-1 overflow-auto"> 
          {showHome && (
            <HomePage />
          )}
          {!showHome && isComponent && (
            <ComponentShowcase component={selectedItem} />
          )}
          {!showHome && isToken && (
            <TokenShowcase token={selectedItem} />
          )}
        </main>
      </div>
    </div>
  );
}