import React from 'react';
import BookADemo from '@/components/book-a-demo/BookADemo';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/Seo';
import StructuredData from '@/components/global/StructuredData';

const pathname = '/book-a-demo';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <StructuredData data={filteredData?.jsonLd} />
      <BookADemo />
    </>
  );
};

export default Page;
