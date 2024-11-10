'use client';
import { useQueryState } from 'nuqs';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '../ui/input';

export function SearchPhoto() {
  const [query, setQuery] = useQueryState('query', { defaultValue: '' });
  const debounced = useDebouncedCallback((value) => {
    setQuery(value);
  }, 500);

  return (
    <div className="sticky top-0 mx-auto mt-4 mb-6 flex items-center justify-center gap-2">
      <Input
        type="text"
        defaultValue={query}
        placeholder="search any photos"
        onChange={(e) => debounced(e.target.value)}
        className="h-11 w-full max-w-sm rounded-full bg-primary/5 focus:max-w-full"
      />
    </div>
  );
}
