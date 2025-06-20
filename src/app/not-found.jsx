import NotFoundPage from '@/components/global/NotFound';
import { getMetadata } from '@/components/global/Seo';
import StructuredData from '@/components/global/StructuredData';
import { NOT_FOUND_DATA } from '@/constants/global/not-found';

const filteredData = '/';
export const metadata = getMetadata(filteredData);

const NotFound = () => {
  return (
    <>
      <StructuredData data={filteredData?.jsonLd} />
      <NotFoundPage data={NOT_FOUND_DATA} />
    </>
  );
};

export default NotFound;
