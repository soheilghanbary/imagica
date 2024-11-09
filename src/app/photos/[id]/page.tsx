import { PhotoView } from '@/components/(app)/photo-view';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: { id: string };
};

export default async function Page(props: Props) {
  const params = await props.params;
  return (
    <div>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: 'ghost' }), 'mb-4')}
      >
        <ArrowLeft /> Back to Home
      </Link>
      <PhotoView id={params.id} />
      {/* <h2 className="mt-10 text-center font-semibold text-lg">More Photos</h2> */}
    </div>
  );
}
