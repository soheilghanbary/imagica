'use client';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useTopics } from '@/hooks/use-topic';
import { Skeleton } from '../ui/skeleton';

const TopicSkeleton = () => (
  <div className="flex items-center gap-2 pb-4">
    {[...Array(14)].map((_, i) => (
      <Skeleton key={i} className="h-8 w-24 rounded-lg bg-primary/10" />
    ))}
  </div>
);

export function TopicList() {
  const { data: topics, isPending } = useTopics('');

  return (
    <section>
      <h2 className="mb-4 font-bold text-lg">Topics</h2>
      <ScrollArea>
        {isPending ? (
          <TopicSkeleton />
        ) : (
          <div className="flex items-center gap-2 pb-4">
            {topics?.pages.map((page) =>
              page.map((topic: any) => (
                <div
                  key={topic.id}
                  className="whitespace-nowrap rounded-lg bg-primary/5 px-4 py-2 font-medium text-xs"
                >
                  {topic.title}
                </div>
              )),
            )}
          </div>
        )}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
