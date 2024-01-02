import React from 'react';
import HeroSection from '@/components/homepage/heroSection';
import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import ChooseUs from '@/components/how-it-work/ChooseUs';
import OurQualityService from '@/components/how-it-work/OurQualityService';
import OurService from '@/components/how-it-work/OurService';

import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import {
  OUR_SERVICE,
  HR_FIRM_DATA,
  CHOOSE_US,
  OUR_OFFERED_SERVICES,
} from '@/constants/how-its-works';

const page = () => {
  return (
    <>
      <HeroSection data={HP_HERO_DATA} />
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
      <ChooseUs chooseUs={CHOOSE_US} />
      <OurService ourService={OUR_SERVICE} />
      <OurQualityService ourQualityService={OUR_OFFERED_SERVICES} />
    </>
  );
};

export default page;
