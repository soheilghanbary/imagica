'use client';
import { useRouter } from 'next/navigation';
import { useQueryState } from 'nuqs';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '../ui/input';

export function SearchPhoto() {
  const router = useRouter();
  const [query, setQuery] = useQueryState('query', { defaultValue: '' });
  const debounced = useDebouncedCallback((value) => {
    setQuery(value);
  }, 500);

  return (
    <div className="mx-auto flex w-full max-w-sm items-center gap-2">
      <Input
        type="text"
        defaultValue={query}
        placeholder="search any photos"
        onChange={(e) => debounced(e.target.value)}
        className="h-11 rounded-full bg-primary/5"
      />
    </div>
  );
}
