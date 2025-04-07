import WikisPage from '@/components/wiki/WikisPage';

import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/esparkwiki';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <WikisPage />
    </>
  );
};

export default Page;
