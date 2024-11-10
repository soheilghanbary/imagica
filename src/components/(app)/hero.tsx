import { cn } from '@/lib/utils';
import { Code2Icon } from 'lucide-react';
import { buttonVariants } from '../ui/button';

export function Hero() {
  return (
    <section className="space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <h1 className="font-extrabold text-3xl tracking-tight sm:text-5xl md:text-6xl/none">
          Find Photos from all over the world
        </h1>
        <p className="max-w-[48rem] text-muted-foreground text-sm/6">
          Discover, share, and inspire with this open-source Unsplash clone.
          Built with the latest Next.js 15, it offers a seamless user
          experience, powerful search, and a vibrant community.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ size: 'lg' }), 'rounded-full')}
          href="https://github.com/soheilghanbary/imagica"
        >
          <Code2Icon />
          GitHub
        </a>
      </div>
    </section>
  );
}
