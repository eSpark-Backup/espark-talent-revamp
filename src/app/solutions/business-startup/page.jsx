import React from 'react';

import Hero from '@/components/homepage/Hero';
import ClientSlider from '@/components/global/ClientSlider';
import OurOutsourcing from '@/components/for-startup/OurOutsourcing';
import TalentIgnite from '@/components/for-startup/TalentIgnite';
import OutSourcingWonder from '@/components/for-enterprise/OutSourcingWonder';
import Faq from '@/components/FAQ/Faq';

import {
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
} from '@/constants/homepage';
import {
  BEST_OUTSOURCING_SOLUTIONS,
  BUSINESS_START_UP,
  CUSTOMIZE_OUTSOURCE,
  OUR_ADDITIONAL_BENEFITS,
  OUR_OUTSOURCE,
  OUTSOURCING_SOLUTIONS_DATA,
} from '@/constants/for-startup';
import { STARTUP_HERO_DATA } from '@/constants/global/hero-sections';
import { FAQ_DATA } from '@/constants/home-page/faq-section';
import CustomizeOutsource from '@/components/for-startup/CustomizeOutsource';
import BusinessVenture from '@/components/for-startup/ BusinessVenture';

const Page = () => {
  return (
    <>
      <Hero data={STARTUP_HERO_DATA} />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        bgColor={'#3B59980A'}
        txtColor={'#001C63'}
        fontSize={'24px !important'}
        fontWeight={500}
        title={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
      />
      <OurOutsourcing data={OUR_OUTSOURCE} />
      <TalentIgnite data={BUSINESS_START_UP} />
      <BusinessVenture data={OUR_ADDITIONAL_BENEFITS} />
      <TalentIgnite
        data={BEST_OUTSOURCING_SOLUTIONS}
        isBestOutsourceComponent={'true'}
      />
      <CustomizeOutsource data={CUSTOMIZE_OUTSOURCE} />
      <OutSourcingWonder data={OUTSOURCING_SOLUTIONS_DATA} />
      <Faq data={FAQ_DATA} />
    </>
  );
};

export default Page;
