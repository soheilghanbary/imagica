'use client';
import { usePhoto } from '@/hooks/use-photo';
import { cn, fromNow } from '@/lib/utils';
import { DownloadIcon, ExternalLink, HeartIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { LoadingIcon } from '../common/icons';
import { Button } from '../ui/button';

type Props = {
  id: string;
};

export function PhotoView({ id }: Props) {
  const [isLoading, setLoading] = useState(true);
  const { data, isPending } = usePhoto(id);

  if (isPending)
    return <LoadingIcon className="mx-auto my-12 size-8 fill-primary" />;

  return (
    <section className="mx-auto max-w-xl space-y-4">
      <div
        className={cn(
          'relative mx-auto aspect-square overflow-hidden rounded-2xl bg-muted/40 transition-all',
        )}
      >
        <Image
          fill
          draggable={false}
          src={data.urls.regular}
          alt={data.alt_description}
          className={cn(
            'rounded-[inherit] object-cover duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-75',
            isLoading ? 'blur-md grayscale' : 'blur-0 grayscale-0',
          )}
          onLoadingComplete={() => setLoading(false)}
          unoptimized
        />
      </div>
      <p>{data.description}</p>
      <div className="mx-auto flex items-center gap-2 rounded-full border bg-muted/40 p-2">
        <img
          src={data.user.profile_image.large}
          alt={data.user.name}
          className="size-10 rounded-full border object-cover"
        />
        <div className="space-y-0.5">
          <h2 className="font-medium text-sm">{data.user.name}</h2>
          <p className="flex items-center gap-1.5 text-muted-foreground text-xs">
            {data.user.username}
            <a href={data.user.portfolio_url} target="_blank" rel="noreferrer">
              <ExternalLink className="size-3.5 text-sky-400" />
            </a>
          </p>
        </div>
      </div>
      <p className="text-muted-foreground text-xs">
        {fromNow(data.created_at)}
      </p>
      <div className="flex items-center justify-center gap-2">
        <Button variant={'outline'} asChild>
          <a href={data.links.download} download>
            <DownloadIcon />
            Download
          </a>
        </Button>
        <Button variant={'outline'}>
          <HeartIcon className="text-rose-500" />
          {data.likes}
        </Button>
      </div>
    </section>
  );
}
