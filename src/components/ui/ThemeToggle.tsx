
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme, getTextClasses, getButtonClasses } = useTheme();
  const textColors = getTextClasses();

  return (
    <div className="flex items-center gap-3">
      <Palette className={`w-5 h-5 ${textColors.muted}`} />
      <ToggleGroup type="single" value={theme} onValueChange={(value) => value && setTheme(value as any)}>
        <ToggleGroupItem value="rainbow" className={getButtonClasses()}>
          Rainbow
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" className={getButtonClasses()}>
          Dark
        </ToggleGroupItem>
        <ToggleGroupItem value="monochrome" className={getButtonClasses()}>
          B&W
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
