import { Moon, Sun, Monitor } from "lucide-react";
import { Theme, useTheme } from "remix-themes";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme, metadata] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed bottom-4 right-4 bg-accent"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">테마 토글</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>
          <Sun className="mr-2 h-4 w-4" />
          라이트
          {theme === Theme.LIGHT && metadata?.definedBy === "USER" && " ✓"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>
          <Moon className="mr-2 h-4 w-4" />
          다크
          {theme === Theme.DARK && metadata?.definedBy === "USER" && " ✓"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(null)}>
          <Monitor className="mr-2 h-4 w-4" />
          시스템
          {metadata?.definedBy === "SYSTEM" && " ✓"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
