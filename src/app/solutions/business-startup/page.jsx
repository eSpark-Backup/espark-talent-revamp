import React from 'react';

import Hero from '@/components/homepage/Hero';
import ClientSlider from '@/components/global/ClientSlider';
import OurOutsourcing from '@/components/for-startup/OurOutsourcing';
import TalentIgnite from '@/components/for-startup/TalentIgnite';
import OutSourcingWonder from '@/components/for-enterprise/OutSourcingWonder';
import CustomizeOutsource from '@/components/for-startup/CustomizeOutsource';
import BusinessVenture from '@/components/for-startup/BusinessVenture';
import Faq from '@/components/FAQ/Faq';

import { STARTUP_HERO_DATA } from '@/constants/global/hero-sections';
import { STARTUP_FAQ_DATA } from '@/constants/home-page/faq-section';
import { getMetadata } from '@/components/global/seo';
import { getFilteredData } from '@/utils/cors';
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

const pathname = '/solutions/business-startup';
const filteredData = getFilteredData(pathname);
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <Hero data={STARTUP_HERO_DATA} />
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
      <OurOutsourcing data={OUR_OUTSOURCE} />
      <TalentIgnite data={BUSINESS_START_UP} />
      <BusinessVenture data={OUR_ADDITIONAL_BENEFITS} />
      <TalentIgnite
        data={BEST_OUTSOURCING_SOLUTIONS}
        isBestOutsourceComponent={'true'}
      />
      <CustomizeOutsource data={CUSTOMIZE_OUTSOURCE} />
      <OutSourcingWonder data={OUTSOURCING_SOLUTIONS_DATA} />
      <Faq data={STARTUP_FAQ_DATA} />
    </>
  );
};

export default Page;
