import React from 'react';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import { HR_FIRM_DATA, OUR_SERVICE } from '@/constants/how-its-works';
import HeroSection from '@/components/homepage/heroSection';
import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import { HR_FIRM_DATA, CHOOSE_US } from '@/constants/how-its-works';
import ChooseUs from '@/components/how-it-work/ChooseUs';
import OurService from '@/components/how-it-work/OurService';

const page = () => {
  return (
    <>
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
      <ChooseUs chooseUs={CHOOSE_US} />
      <OurService ourService={OUR_SERVICE} />
      <HeroSection data={HP_HERO_DATA} />
    </>
  );
};

export default page;
