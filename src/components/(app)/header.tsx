import { siteConfig } from '@/config/site';
import { AirVent, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '../common/mode-toggle';
import { Button } from '../ui/button';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
    <AirVent className="size-4" />
    <p>{siteConfig.name}</p>
  </Link>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-border/40 border-b bg-background">
      <nav className="container flex items-center justify-between gap-4 p-4">
        <Logo />
        <div className="space-x-2">
          <Button variant={'ghost'} size={'icon'}>
            <GithubIcon />
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
