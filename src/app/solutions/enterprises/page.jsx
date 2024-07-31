// 'use client';
import React from 'react';

import Hero from '@/components/homepage/Hero';
import ClientSlider from '@/components/global/ClientSlider';
import AwardAchievement from '@/components/homepage/AwardAchiefment';
import OutSourcingItem from '@/components/for-enterprise/OutSourcingItem';
import OutStaffings from '@/components/for-enterprise/OutStaffings';
import OutSourcingWonder from '@/components/for-enterprise/OutSourcingWonder';
import OutSourcingAdvantage from '@/components/for-enterprise/OutSourcingAdvantage';

import {
  ACHIEVEMENTS_DATA,
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
} from '@/constants/homepage';
import {
  OUTSOURCING_ADVANTAGES_DATA,
  OUTSOURCING_LIST_DATA,
  OUTSOURCING_WONDERS_DATA,
  OUTSTAFFING_TRUST_DATA,
} from '@/constants/for-enterprise';
import { ENTERPRISE_HERO_DATA } from '@/constants/global/hero-sections';
import { FAQ_DATA_ENTERPRISE } from '@/constants/home-page/faq-section';
import { GLOBAL_SEO } from '@/constants/seo-data';
import { getPageSeo } from '@/sanity/sanity.quries';

import Faq from '@/components/FAQ/Faq';

const pathname = '/solutions/enterprises';
const seo = await getPageSeo();
const filteredData =
  seo.find((item) => item.path === pathname) || GLOBAL_SEO[0];

export const metadata = {
  metadataBase: new URL('https://www.esparktalent.com/'),
  title: filteredData?.metaTitle,
  description: filteredData?.metaDescription,
  keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
  author: `eSpark Talent`,
  alternates: {
    canonical: `https://www.esparktalent.com${filteredData?.path}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
  robots: {
    index: filteredData?.index ?? true,
    follow: filteredData?.follow ?? true,
  },
  openGraph: {
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.metaTitle,
    description: filteredData?.metaDescription,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['eSpark Talent', 'Mehdi Raza'],
    siteName: `eSpark Talent: Get Modern Employee Outsourcing Solutions.`,
    locale: `en_US`,
    images: [
      {
        url: filteredData?.metaImage,
        alt: filteredData?.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    metadataBase: new URL('https://www.esparktalent.com/'),
    title: filteredData?.metaTitle,
    description: filteredData?.metaDescription,
    siteId: `@eSparkTalent`,
    creator: `@eSparkTalent`,
    images: [`${filteredData?.metaImage}`],
  },
};

const Page = () => {
  return (
    <>
      <Hero data={ENTERPRISE_HERO_DATA} color="default" />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        length={100}
        fontSize={{
          xs: '19px !important',
          sm: '20px !important',
          md: '22px !important',
          lg: '24px !important',
        }}
        lineHeight={{ xs: '30px !important', sm: '25px !important' }}
        fontWeight={500}
        bgColor={'#fff'}
        txtColor={'#09114A'}
        compeleteTitle={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
        shortTitle={'Meet our partners who trust our certified tech experts'}
      />
      <OutSourcingItem data={OUTSOURCING_LIST_DATA} />
      <OutSourcingAdvantage data={OUTSOURCING_ADVANTAGES_DATA} />
      <OutSourcingWonder data={OUTSOURCING_WONDERS_DATA} />
      <OutStaffings data={OUTSTAFFING_TRUST_DATA} />
      <AwardAchievement data={ACHIEVEMENTS_DATA} design={2} />
      <Faq data={FAQ_DATA_ENTERPRISE} />
    </>
  );
};

export default Page;
