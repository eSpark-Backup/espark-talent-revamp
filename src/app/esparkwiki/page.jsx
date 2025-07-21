import WikisPage from '@/components/wiki/WikisPage';
import { GLOBAL_SEO } from '@/constants/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';
import StructuredData from '@/components/global/StructuredData';

const pathname = '/esparkwiki';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      {' '}
      <StructuredData data={filteredData.jsonLd} />
      <WikisPage />
    </>
  );
};

export default Page;
