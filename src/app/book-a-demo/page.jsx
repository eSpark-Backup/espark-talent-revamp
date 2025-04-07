import React from 'react';
import BookADemo from '@/components/book-a-demo/BookADemo';
import { GLOBAL_SEO } from '@/constants/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';

const pathname = '/book-a-demo';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <BookADemo />
    </>
  );
};

export default Page;
