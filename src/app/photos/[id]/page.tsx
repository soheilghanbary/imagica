import { PhotoView } from '@/components/(app)/photo-view';
import { buttonVariants } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: { id: string };
};

export default async function Page(props: Props) {
  const params = await props.params;
  return (
    <div className="space-y-4">
      <Link href="/" className={buttonVariants({ variant: 'ghost' })}>
        <ArrowLeft /> Back to Home
      </Link>
      <PhotoView id={params.id} />
    </div>
  );
}
