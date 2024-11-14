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

const Photo = ({ id, urls, alt_description, user }: any) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Link
      href={`/photos/${id}`}
      className="group relative aspect-square overflow-hidden rounded-2xl"
    >
      <Image
        fill
        src={urls.small}
        alt={alt_description}
        className={cn(
          '-z-10 rounded-[inherit] object-cover duration-500 ease-in-out group-hover:scale-110',
          isLoading ? 'blur-md grayscale' : 'blur-0 grayscale-0',
        )}
        onLoadingComplete={() => setLoading(false)}
        unoptimized
      />
      <div className="invisible z-50 flex size-full items-end justify-start rounded-[inherit] bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 duration-300 group-hover:visible group-hover:opacity-100">
        <div className="flex items-center gap-4 p-4">
          <img
            src={user.profile_image.large}
            alt={alt_description || ''}
            className="size-10 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <h2 className="line-clamp-1 font-semibold text-sm text-white">
              {user.name}
            </h2>
            <p className="text-white text-xs">@{user.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const EmptyPhoto = () => (
  <div className="py-20 text-center">
    <p className="text-lg/6">👾 No photos found</p>
  </div>
);

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

  if (!photos?.pages[0].length) return <EmptyPhoto />;

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
