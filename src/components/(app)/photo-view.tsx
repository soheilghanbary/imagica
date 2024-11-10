'use client';
import { usePhoto } from '@/hooks/use-photo';
import { cn, formatViews, fromNow } from '@/lib/utils';
import {
  ClockIcon,
  DownloadIcon,
  ExternalLink,
  EyeIcon,
  HeartIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { LoadingIcon } from '../common/icons';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { UserPhotos } from './user-photos';

type Props = {
  id: string;
};

export function PhotoView({ id }: Props) {
  const [isLoading, setLoading] = useState(true);
  const { data, isPending } = usePhoto(id);

  if (isPending)
    return <LoadingIcon className="mx-auto mt-20 size-7 fill-primary" />;

  return (
    <>
      <section className="mx-auto mb-16 max-w-xl space-y-4">
        <div
          className={cn(
            'relative mx-auto aspect-square overflow-hidden rounded-2xl bg-muted/40 transition-all',
          )}
        >
          <Image
            fill
            draggable={false}
            src={data.urls.regular}
            alt={data.alt_description || ''}
            className={cn(
              'rounded-[inherit] object-cover duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-75',
              isLoading ? 'blur-md grayscale' : 'blur-0 grayscale-0',
            )}
            onLoadingComplete={() => setLoading(false)}
            unoptimized
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <p className="flex items-center gap-1.5 font-medium text-foreground/80 text-xs">
            <EyeIcon className="size-4 text-sky-500" />
            {formatViews(data.views)}
          </p>
          <Separator orientation="vertical" className="h-4" />
          <p className="flex items-center gap-1.5 font-medium text-foreground/80 text-xs">
            <HeartIcon className="size-4 text-rose-400" />
            {formatViews(data.likes)}
          </p>
          <Separator orientation="vertical" className="h-4" />
          <p className="flex items-center gap-1.5 font-medium text-foreground/80 text-xs">
            <DownloadIcon className="size-4 text-teal-400" />
            {formatViews(data.downloads)}
          </p>
          <Separator orientation="vertical" className="h-4" />
          <p className="flex items-center gap-1.5 font-medium text-foreground/80 text-xs">
            <ClockIcon className="size-4 text-violet-400" />
            {fromNow(data.created_at)}
          </p>
        </div>
        <Separator orientation="horizontal" />
        <p className="text-sm/6">{data.description || data.alt_description}</p>
        <Button variant={'outline'} asChild>
          <a
            download
            target="_blank"
            rel="noreferrer"
            href={data.links.download}
          >
            <DownloadIcon />
            Download
          </a>
        </Button>
      </section>
      <div className="mx-auto my-6 flex max-w-xl items-center gap-4">
        <img
          src={data.user.profile_image.large}
          alt={data.alt_description || ''}
          className="size-20 rounded-full border object-cover"
        />
        <div className="space-y-1.5">
          <h2 className="font-semibold">{data.user.name}</h2>
          <p className="flex items-center gap-1.5 text-muted-foreground text-xs">
            @{data.user.username}
            <a href={data.user.portfolio_url} target="_blank" rel="noreferrer">
              <ExternalLink className="size-4 text-sky-400" />
            </a>
          </p>
        </div>
      </div>
      <UserPhotos username={data.user.username} />
    </>
  );
}
