import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const API_KEY = process.env.API_KEY;
const UNSPLASH_KEY = 'U7DCc9zu9YT3-NDeVLi9if-SB91zIQFXZQxLvxGTqTA';

const fetcher = async (page: number, query: string) => {
  if (query.length) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${query}&client_id=${API_KEY}`,
    );
    const data = await response.json();
    return data.results;
  }
  const response = await fetch(
    `https://api.unsplash.com/photos?page=${page}&per_page=12&client_id=${API_KEY}`,
  );
  return await response.json();
};

export const usePhotos = (query: string) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['photos', query],
    queryFn: ({ pageParam }) => fetcher(pageParam, query),
    getNextPageParam: (_, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage) => firstPage.previous_page,
  });
};

export const usePhoto = (id: string) => {
  return useQuery({
    queryKey: ['photo', id],
    queryFn: async () => {
      const url = `https://api.unsplash.com/photos/${id}?client_id=${UNSPLASH_KEY}`;
      const response = await fetch(url);
      return await response.json();
    },
  });
};
