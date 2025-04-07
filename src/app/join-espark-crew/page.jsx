import JoinEsparkCrewPage from '@/components/Join-espark-crew/JoinEsparkCrewPage';

import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';

const pathname = '/join-espark-crew';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <JoinEsparkCrewPage />
    </>
  );
};

export default Page;
