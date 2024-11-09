import { Hero } from '@/components/(app)/hero';
import { PhotoList } from '@/components/(app)/photo-list';
import { SearchPhoto } from '@/components/(app)/search-photo';
import { TopicList } from '@/components/(app)/topic-list';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <Hero />
      <TopicList />
      <Suspense>
        <div className="my-8">
          <SearchPhoto />
        </div>
        <PhotoList />
      </Suspense>
    </>
  );
}
