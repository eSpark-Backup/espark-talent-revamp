import { GLOBAL_SEO } from '@/constants/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';
import StructuredData from '@/components/global/StructuredData';
import Ksa from '@/components/ksa/ksa';

const pathname = '/ksa';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <StructuredData data={filteredData.jsonLd} />
      <Ksa />
    </>
  );
};

export default Page;
