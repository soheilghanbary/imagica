import { Hero } from '@/components/(app)/hero';
import { PhotoList } from '@/components/(app)/photo-list';
import { SearchPhoto } from '@/components/(app)/search-photo';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <Hero />
      <Suspense>
        <div className="mb-8">
          <SearchPhoto />
        </div>
        <PhotoList />
      </Suspense>
    </>
  );
}
