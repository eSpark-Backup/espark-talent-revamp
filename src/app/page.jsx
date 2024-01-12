'use client';
import React from 'react';

import ClientSlider from '@/components/global/ClientSlider';
import SourceBenefits from '@/components/homepage/SourceBenefits';
import BenefitsWorks from '@/components/homepage/BenefitsWorks';
import AwardAchievement from '@/components/homepage/AwardAchiefment';
import OurExperties from '@/components/homepage/OurExperties';
import HomeBlogs from '@/components/blogs/HomeBlogs';
import ClientSays from '@/components/homepage/ClientSays';
import Hero from '@/components/homepage/Hero';
import Process from '@/components/homepage/Process';
import Perks from '@/components/homepage/Perks';
import Faq from '@/components/FAQ/Faq';
// import Faqs from '@/components/Faqs';

import {
  ACHIEVEMENTS_DATA,
  BENEFITS_WORKS_DATA,
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
  EXPERTIES_DATA,
  OUR_CLIENT_SAYS,
  OUTSOURCE_BENEFITS_DATA,
  PERKS_DATA,
  PROCESS_DATA,
} from '@/constants/homepage';
import { FAQ_DATA } from '@/constants/home-page/faq-section';
import { BLOGS_DATA } from '@/constants/blogs';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';

const page = () => {
  return (
    <>
      <Hero data={HP_HERO_DATA} color="primary" />
      {/* <HeroSection /> */}
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        bgColor={'#029894'}
        txtColor={'#ffffff'}
        title={'Meet our partners who trust our certified tech experts'}
        length={100}
        fontSize={{
          xs: '19px !important',
          sm: '20px !important',
          md: '22px !important',
          lg: '28px !important',
        }}
        lineHeight={{ xs: '30px !important', sm: '20px !important' }}
        fontWeight={500}
      />
      <Process data={PROCESS_DATA} />
      <SourceBenefits data={OUTSOURCE_BENEFITS_DATA} />
      <Perks data={PERKS_DATA} />
      <BenefitsWorks data={BENEFITS_WORKS_DATA} />
      <OurExperties data={EXPERTIES_DATA} />
      <ClientSays data={OUR_CLIENT_SAYS} />
      <HomeBlogs data={BLOGS_DATA} />
      <AwardAchievement
        data={ACHIEVEMENTS_DATA}
        design={1}
        background={'#F7F8FB'}
      />
      <Faq data={FAQ_DATA} />
      {/* <Faqs data={FAQ_DATA} /> */}
    </>
  );
};
export default page;
