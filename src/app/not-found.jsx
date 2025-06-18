import NotFoundPage from '@/components/global/NotFound';
import { getMetadata } from '@/components/global/seo';
import StructuredData from '@/components/global/StructuredData';
import { NOT_FOUND_DATA } from '@/constants/global/notfound';

const filteredData = '/';
export const metadata = getMetadata(filteredData);

export default function NotFound() {
  return (
    <>
      <StructuredData data={filteredData?.jsonLd} />
      <NotFoundPage data={NOT_FOUND_DATA} />
    </>
  );
}
