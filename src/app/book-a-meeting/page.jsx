import React from 'react';
import MeetingPage from '@/components/book-a-meeting/MeetingPage';
import { GLOBAL_SEO } from '@/constants/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';

const pathname = '/book-a-meeting';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <MeetingPage />
    </>
  );
};

export default Page;
