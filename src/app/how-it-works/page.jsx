import React from 'react';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import { HR_FIRM_DATA, OUR_SERVICE } from '@/constants/how-its-works';
import HeroSection from '@/components/homepage/heroSection';
import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import { HR_FIRM_DATA, OUR_OFFERED_SERVICES } from '@/constants/how-its-works';
import OurQualityService from '@/components/how-it-work/OurQualityService';
import OurService from '@/components/how-it-work/OurService';

const page = () => {
  return (
    <>
      <HeroSection data={HP_HERO_DATA} />
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
      <OurQualityService ourQualityService={OUR_OFFERED_SERVICES} />
      <OurService ourService={OUR_SERVICE} />
    </>
  );
};

export default page;
