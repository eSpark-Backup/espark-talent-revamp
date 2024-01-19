import Image from 'next/image';
import { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { getSingleWiki } from '@/sanity/sanity.quries';
import InnerHero from '@/components/homepage/InnerHero';
import { WIKI_HERO_DATA } from '@/constants/global/hero-sections';
import WikiSingle from '@/components/wiki/WikiSingle';
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
