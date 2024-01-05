'use client';
import React from 'react';

import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import ChooseUs from '@/components/how-it-work/ChooseUs';
import OurQualityService from '@/components/how-it-work/OurQualityService';
import OurService from '@/components/how-it-work/OurService';

import { HOW_WORKS_HERO_DATA } from '@/constants/global/hero-sections';
import { CLIENTS_SLIDER_DATA } from '@/constants/homepage';
import {
  CHOOSE_US,
  HR_FIRM_DATA,
  OUR_OFFERED_SERVICES,
  OUR_SERVICE,
} from '@/constants/how-its-works';
import ClientSlider from '@/components/global/ClientSlider';
import Hero from '@/components/homepage/Hero';

const page = () => {
  return (
    <>
      <Hero data={HOW_WORKS_HERO_DATA} />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        bgColor={'#3B59980A'}
        txtColor={'#001C63'}
        fontWeight={500}
        title={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
      />
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
      <ChooseUs chooseUs={CHOOSE_US} />
      <OurService ourService={OUR_SERVICE} />
      <OurQualityService ourQualityService={OUR_OFFERED_SERVICES} />
    </>
  );
};

export default page;
