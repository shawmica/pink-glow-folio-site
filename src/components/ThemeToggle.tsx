
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-green-500 hover:bg-green-500/20 hover:text-green-500"
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] ${theme === 'dark' ? 'block' : 'hidden'}`} />
      <Moon className={`h-[1.2rem] w-[1.2rem] ${theme === 'light' ? 'block' : 'hidden'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
