import { useInfiniteQuery } from '@tanstack/react-query';

const API_KEY = process.env.API_KEY;

const fetcher = async (page: number, query: string) => {
  if (query.length) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${query}&client_id=${API_KEY}`,
    );
    const data = await response.json();
    return data.results;
  }
  const response = await fetch(
    `https://api.unsplash.com/topics?page=${page}&per_page=12&client_id=${API_KEY}`,
  );
  return await response.json();
};

export const useTopics = (query: string) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['topics', query],
    queryFn: ({ pageParam }) => fetcher(pageParam, query),
    getNextPageParam: (_, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage) => firstPage.previous_page,
  });
};
