import { Hero } from '@/components/(app)/hero';
import { PhotoList } from '@/components/(app)/photo-list';
import { SearchPhoto } from '@/components/(app)/search-photo';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <Hero />
      {/* <TopicList /> */}
      <Suspense>
        <SearchPhoto />
        <PhotoList />
      </Suspense>
    </>
  );
}
