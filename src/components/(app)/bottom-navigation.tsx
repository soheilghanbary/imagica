import {
  BookmarkIcon,
  HomeIcon,
  LayoutGrid,
  type LucideIcon,
  SearchIcon,
} from 'lucide-react';
import Link from 'next/link';

type NavigationLinkProps = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <Link
      href={props.href}
      className="flex flex-col items-center justify-center gap-1.5 p-2 pt-4 font-medium text-foreground/80 text-xs"
    >
      <props.icon className="size-5" />
      <p>{props.label}</p>
    </Link>
  );
};

export function BottomNavigation() {
  return (
    <section className="fixed bottom-0 left-0 z-[99] grid w-full grid-cols-4 border-border/40 border-t bg-background/80 backdrop-blur md:hidden">
      <NavigationLink href="/" label="Home" icon={HomeIcon} />
      <NavigationLink href="/search" label="Search" icon={SearchIcon} />
      <NavigationLink href="/topics" label="Topics" icon={LayoutGrid} />
      <NavigationLink href="/saved" label="Saved" icon={BookmarkIcon} />
    </section>
  );
}
