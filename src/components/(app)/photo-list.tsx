'use client';
import { usePhotos } from '@/hooks/use-photo';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Skeleton } from '../ui/skeleton';

const PhotosSkeleton = () => (
  <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
    {[...Array(8)].map((_, i) => (
      <Skeleton key={i} className="aspect-square rounded-xl bg-secondary" />
    ))}
  </div>
);

const Photo = ({ id, urls, alt_description }: any) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Link
      href={`/photos/${id}`}
      className="relative aspect-square overflow-hidden rounded-2xl bg-muted/40"
    >
      <Image
        fill
        src={urls.small}
        alt={alt_description}
        className={cn(
          'rounded-[inherit] object-cover duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-75',
          isLoading ? 'blur-md grayscale' : 'blur-0 grayscale-0',
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </Link>
  );
};

export function PhotoList() {
  const [query, _] = useQueryState('query');
  const { ref, inView } = useInView();
  const {
    data: photos,
    isFetching,
    isPending,
    fetchNextPage,
    hasNextPage,
  } = usePhotos(query || '');

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isPending) return <PhotosSkeleton />;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {photos?.pages.map((page) =>
          page.map((photo: any) => <Photo key={photo.id} {...photo} />),
        )}
      </div>
      <div ref={ref} />
      {isFetching && <PhotosSkeleton />}
    </>
  );
}
