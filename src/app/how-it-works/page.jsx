import React from 'react';
import HeroSection from '@/components/homepage/heroSection';
import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import { HR_FIRM_DATA } from '@/constants/how-its-works';

const page = () => {
  return (
    <>
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
      <HeroSection data={HP_HERO_DATA} />
    </>
  );
};

export default page;
