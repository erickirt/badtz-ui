"use client"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useThemeConfig } from "@/components/active-theme"

const DEFAULT_THEMES = [
  {
    name: "Default",
    value: "default",
  },
  {
    name: "Scaled",
    value: "scaled",
  },
  {
    name: "Mono",
    value: "mono",
  },
]

const COLOR_THEMES = [
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Amber",
    value: "amber",
  },
  {
    name: "Rose",
    value: "rose",
  },
  {
    name: "Purple",
    value: "purple",
  },
  {
    name: "Orange",
    value: "orange",
  },
  {
    name: "Teal",
    value: "teal",
  },
]

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig()

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Label htmlFor="theme-selector" className="sr-only">
        Theme
      </Label>
      <Select value={activeTheme} onValueChange={setActiveTheme}>
        <SelectTrigger
          id="theme-selector"
          size="sm"
          className="!bg-background text-secondary-foreground border-border justify-start shadow-sm *:data-[slot=select-value]:w-12"
        >
          <span className="font-medium">Theme:</span>
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectGroup>
            {DEFAULT_THEMES.map((theme) => (
              <SelectItem
                key={theme.name}
                value={theme.value}
                className="data-[state=checked]:opacity-50"
              >
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Colors</SelectLabel>
            {COLOR_THEMES.map((theme) => (
              <SelectItem
                key={theme.name}
                value={theme.value}
                className="data-[state=checked]:opacity-50"
              >
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
