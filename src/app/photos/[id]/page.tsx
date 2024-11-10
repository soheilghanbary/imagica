import { BackButton } from '@/components/(app)/back-button';
import { PhotoView } from '@/components/(app)/photo-view';
import { ScrollToTop } from '@/components/common/scroll-to-top';

type Props = {
  params: { id: string };
};

export default async function Page(props: Props) {
  const params = await props.params;
  return (
    <div>
      <ScrollToTop />
      <BackButton />
      <PhotoView id={params.id} />
      {/* <h2 className="mt-10 text-center font-semibold text-lg">More Photos</h2> */}
    </div>
  );
}
