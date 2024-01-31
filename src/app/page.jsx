'use client';
import React, { useEffect } from 'react';
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
} from '../constants/homepage';
import { FAQ_DATA } from '../constants/home-page/faq-section';
import { HP_HERO_DATA } from '../constants/global/hero-sections';
import dynamic from 'next/dynamic';
import Hero from '@/components/homepage/Hero';
import ClientSlider from '@/components/global/ClientSlider';

const SourceBenefits = dynamic(
  () => import('@/components/homepage/SourceBenefits'),
  {
    ssr: false,
  }
);

const BenefitsWorks = dynamic(
  () => import('@/components/homepage/BenefitsWorks'),
  {
    ssr: false,
  }
);

const AwardAchievement = dynamic(
  () => import('@/components/homepage/AwardAchiefment'),
  {
    ssr: false,
  }
);

const OurExperties = dynamic(
  () => import('@/components/homepage/OurExperties'),
  {
    ssr: false,
  }
);

const HomeBlogs = dynamic(() => import('@/components/blogs/HomeBlogs'), {
  ssr: true,
});

const ClientSays = dynamic(() => import('@/components/homepage/ClientSays'), {
  ssr: false,
});

const Process = dynamic(() => import('@/components/homepage/Process'), {
  ssr: false,
});

const Perks = dynamic(() => import('@/components/homepage/Perks'), {
  ssr: false,
});

const Faq = dynamic(() => import('@/components/FAQ/Faq'), {
  ssr: false,
});
const Page = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  return (
    <>
      <Hero data={HP_HERO_DATA} color="primary" />
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
      <HomeBlogs />
      <AwardAchievement
        data={ACHIEVEMENTS_DATA}
        design={1}
        background={'#F7F8FB'}
      />
      <Faq data={FAQ_DATA} />
    </>
  );
};
export default Page;
