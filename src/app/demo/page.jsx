'use client';
import React, { useEffect } from 'react';
import {
  ACHIEVEMENTS_DATA,
  BENEFITS_WORKS_DATA,
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
  DEMO_DATA,
  EXPERTIES_DATA,
  OUR_CLIENT_SAYS,
  PROCESS_DATA,
} from '@/constants/homepage';
import { DEMO_HERO_DATA } from '@/constants/global/hero-sections';
import Hero from '@/components/homepage/Hero';
import ClientSlider from '@/components/global/ClientSlider';
import AwardAchievement from '@/components/homepage/AwardAchiefment';
import ClientSays from '@/components/homepage/ClientSays';
import OurExperties from '@/components/homepage/OurExperties';
import BenefitsWorks from '@/components/homepage/BenefitsWorks';
import DemoCta from '@/components/demo/DemoCta';
import Process from '@/components/homepage/Process';
import { getMetadata } from '@/components/global/seo';
import { getPageSeo } from '@/sanity/sanity.quries';

const pathname = '/demo';
const seo = await getPageSeo();
const filteredData =
  seo?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = getMetadata(filteredData);

const Page = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <>
      <Hero data={DEMO_HERO_DATA} color="primary" />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        bgColor={'#029894'}
        txtColor={'#ffffff'}
        shortTitle={'Meet our partners who trust our certified tech experts'}
        compeleteTitle={
          'Meet our partners who trust our certified tech experts'
        }
        length={100}
        fontSize={{
          xs: '19px !important',
          sm: '20px !important',
          md: '22px !important',
          lg: '28px !important',
        }}
        lineHeight={{ xs: '30px !important', sm: '25px !important' }}
        fontWeight={500}
      />
      <Process data={PROCESS_DATA} />
      <DemoCta data={DEMO_DATA} link={'/book-a-demo'} target={'_blank'} />
      <BenefitsWorks data={BENEFITS_WORKS_DATA} />
      <OurExperties data={EXPERTIES_DATA} />
      <ClientSays data={OUR_CLIENT_SAYS} />
      <AwardAchievement
        data={ACHIEVEMENTS_DATA}
        design={1}
        background={'#F7F8FB'}
      />
    </>
  );
};
export default Page;
