import { cn } from '@/lib/utils';
import { Code2Icon } from 'lucide-react';
import { buttonVariants } from '../ui/button';

export function Hero() {
  return (
    <section className="space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl/tight">
          a Cool photo searcher from all over the world
        </h1>
        <p className="max-w-[42rem] text-muted-foreground leading-normal sm:text-xl sm:leading-8">
          Modern image sharing platform powered by Next.js 15.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: 'secondary', size: 'lg' }),
            'rounded-full',
          )}
          href="https://github.com/soheilghanbary/imagica"
        >
          <Code2Icon />
          GitHub
        </a>
      </div>
    </section>
  );
}
