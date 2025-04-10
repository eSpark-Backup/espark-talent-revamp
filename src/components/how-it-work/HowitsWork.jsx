import Hero from '@/components/homepage/Hero';

import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import ChooseUs from '@/components/how-it-work/ChooseUs';
import OurQualityService from '@/components/how-it-work/OurQualityService';
import OurService from '@/components/how-it-work/OurService';

import {
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
} from '@/constants/homepage';
import {
  CHOOSE_US,
  HR_FIRM_DATA,
  OUR_OFFERED_SERVICES,
  OUR_SERVICE,
} from '@/constants/how-its-works';

import { HOW_WORKS_HERO_DATA } from '@/constants/global/hero-sections';
import ClientSlider from '../global/ClientSlider';

const HowitsWork = () => {
  return (
    <>
      <Hero data={HOW_WORKS_HERO_DATA} />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        bgColor={'#fff'}
        txtColor={'#09114A'}
        compeleteTitle={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
        shortTitle={'Meet our partners who trust our certified tech experts'}
        length={100}
        fontSize={{
          xs: '19px !important',
          sm: '20px !important',
          md: '22px !important',
          lg: '24px !important',
        }}
        lineHeight={{ xs: '30px !important', sm: '25px !important' }}
        fontWeight={500}
      />
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
      <OurService ourService={OUR_SERVICE} />
      <ChooseUs chooseUs={CHOOSE_US} />
      <OurQualityService ourQualityService={OUR_OFFERED_SERVICES} />
    </>
  );
};

export default HowitsWork;
