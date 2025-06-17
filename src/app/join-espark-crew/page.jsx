import JoinEsparkCrewPage from '@/components/Join-espark-crew/JoinEsparkCrewPage';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';
import StructuredData from '@/components/global/StructuredData';

const pathname = '/join-espark-crew';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      {' '}
      <StructuredData data={filteredData.jsonLd} />
      <JoinEsparkCrewPage />
    </>
  );
};

export default Page;
