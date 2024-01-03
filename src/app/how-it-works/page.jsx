import React from 'react';
import { HOW_WORKS_HERO_DATA} from '@/constants/global/hero-sections';
import {
  OUR_SERVICE,
  HR_FIRM_DATA,
  CHOOSE_US,
  OUR_OFFERED_SERVICES,
} from '@/constants/how-its-works';
import HeroSection from '@/components/homepage/heroSection';
import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import ChooseUs from '@/components/how-it-work/ChooseUs';
import OurQualityService from '@/components/how-it-work/OurQualityService';
import OurService from '@/components/how-it-work/OurService';

const page = () => {
  return (
    <>
      <HeroSection data={HOW_WORKS_HERO_DATA} />
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
      <ChooseUs chooseUs={CHOOSE_US} />
      <OurService ourService={OUR_SERVICE} />
      <OurQualityService ourQualityService={OUR_OFFERED_SERVICES} />
    </>
  );
};

export default page;
