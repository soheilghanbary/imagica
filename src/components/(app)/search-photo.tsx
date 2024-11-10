'use client';
import { useQueryState } from 'nuqs';
import { useDebouncedCallback } from 'use-debounce';

export function SearchPhoto() {
  const [query, setQuery] = useQueryState('query', { defaultValue: '' });
  const debounced = useDebouncedCallback((value) => {
    setQuery(value);
  }, 500);

  return (
    <div className="relative mx-auto mt-4 mb-6 flex max-w-lg items-center justify-center gap-2">
      <input
        type="text"
        defaultValue={query}
        placeholder="search any photos"
        onChange={(e) => debounced(e.target.value)}
        className="h-11 w-full rounded-full border border-border bg-background px-4 py-2 text-foreground/80 text-sm shadow-sm ring-primary duration-150 focus:ring-2"
      />
    </div>
  );
}
