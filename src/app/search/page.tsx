'use client';
import { PhotoList } from '@/components/(app)/photo-list';
import { SearchPhoto } from '@/components/(app)/search-photo';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { SearchIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { Suspense } from 'react';

const SearchPhotoModal = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop)
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size={'icon'}
            className="fixed right-5 bottom-20 z-40 size-12 rounded-full [&_svg]:size-5"
          >
            <SearchIcon />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search Any Photo</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <Suspense>
            <div className="w-full">
              <SearchPhoto />
            </div>
          </Suspense>
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          size={'icon'}
          className="fixed right-5 bottom-20 z-40 size-12 rounded-full [&_svg]:size-5"
        >
          <SearchIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="z-[100]">
        <DrawerHeader>
          <DrawerTitle>Search Any Photo</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <Suspense>
          <div className="w-full p-4">
            <SearchPhoto />
          </div>
        </Suspense>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default function SearchPage() {
  const [query, _] = useQueryState('query');
  return (
    <div>
      <h1 className="mb-6 text-center font-black text-2xl">Search Any Photo</h1>
      <SearchPhotoModal />
      {query && <PhotoList />}
    </div>
  );
}
