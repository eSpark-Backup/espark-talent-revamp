import { getSingleWiki } from '@/sanity/sanity.quries';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import React from 'react';

const Page = async ({ params }) => {
  const slug = params?.wiki;
  const wiki = await getSingleWiki(slug);

  const InnerHero = React.lazy(() => import('@/components/homepage/InnerHero'));
  const WikiSingle = React.lazy(() => import('@/components/wiki/WikiSingle'));
  return (
    <>
      <InnerHero data={WIKI_HERO_DATA} innerData={wiki} />
      <WikiSingle data={wiki} />
    </>
  );
};

export default Page;
