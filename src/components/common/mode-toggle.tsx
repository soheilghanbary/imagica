'use client';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <MoonIcon className="dark:-rotate-90 size-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
      <SunIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
