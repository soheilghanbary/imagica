'use client';
import { SearchIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useDebouncedCallback } from 'use-debounce';

export function SearchPhoto() {
  const [query, setQuery] = useQueryState('query', { defaultValue: '' });
  const debounced = useDebouncedCallback((value) => {
    setQuery(value);
  }, 500);

  return (
    <div className="relative mx-auto mt-4 mb-6 flex max-w-lg items-center justify-center gap-2">
      <SearchIcon className="-translate-y-1/2 absolute top-1/2 left-4 size-4 text-muted-foreground" />
      <input
        type="text"
        defaultValue={query}
        placeholder="Search any photos"
        onChange={(e) => debounced(e.target.value)}
        className="h-11 w-full rounded-full border border-border bg-background px-4 py-2 pl-10 text-foreground/80 text-sm placeholder-muted-foreground shadow-sm ring-primary duration-150 focus:ring-2"
      />
    </div>
  );
}
