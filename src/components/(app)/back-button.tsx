'use client';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export function BackButton() {
  const router = useRouter();

  return (
    <Button variant={'ghost'} onClick={() => router.back()} className="mb-4">
      <ArrowLeft /> Back
    </Button>
  );
}
