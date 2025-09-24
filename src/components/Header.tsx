import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onHomeClick: () => void;
}

export function Header({ onHomeClick }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <header className="border-b bg-background px-6 py-3">
      <div className="flex items-center justify-between">
        <div 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onHomeClick}
        >
          <h1 className="text-2xl font-semibold">Design System</h1>
          <p className="text-sm text-muted-foreground">컴포넌트와 디자인 토큰 문서</p>
        </div>
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
}