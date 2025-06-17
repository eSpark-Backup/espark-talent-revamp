import React from 'react';
import DemoMeetingPage from '@/components/book-a-demo-meeting/DemoMeetingPage';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';
import { getMetadata } from '@/components/global/seo';
import StructuredData from '@/components/global/StructuredData';

import { DEMO_MEETING_DATA } from '@/constants/book-demo-meeting/book-demo-meeting';

const pathname = '/book-a-demo-meeting';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      {' '}
      <StructuredData data={filteredData.jsonLd} />
      <DemoMeetingPage data={DEMO_MEETING_DATA} />
    </>
  );
};

export default Page;
