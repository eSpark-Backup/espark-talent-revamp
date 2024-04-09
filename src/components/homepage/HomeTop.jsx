import React from 'react';
import Process from './Process';
import {
  BENEFITS_WORKS_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
  CLIENTS_SLIDER_DATA,
  EXPERTIES_DATA,
  OUR_CLIENT_SAYS,
  OUTSOURCE_BENEFITS_DATA,
  PERKS_DATA,
  PROCESS_DATA,
} from '@/constants/homepage';
import Perks from './Perks';
import SourceBenefits from './SourceBenefits';
import BenefitsWorks from './BenefitsWorks';
import OurExperties from './OurExperties';
import ClientSays from './ClientSays';
import Hero from './Hero';
import { HP_HERO_DATA } from '@/constants/global/hero-sections';
import ClientSlider from '../global/ClientSlider';

const HomeTop = () => {
  return (
    <>
      <Hero data={HP_HERO_DATA} color="primary" />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        bgColor={'#029894'}
        txtColor={'#ffffff'}
        compeleteTitle={
          'Meet our partners who trust our certified tech experts'
        }
        shortTitle={'Meet our partners who trust our certified tech experts'}
        length={100}
        fontSize={{
          xs: '19px !important',
          sm: '20px !important',
          md: '22px !important',
          lg: '28px !important',
        }}
        lineHeight={{ xs: '30px !important', sm: '25px !important' }}
        fontWeight={500}
      />
      <Process data={PROCESS_DATA} />
      <SourceBenefits data={OUTSOURCE_BENEFITS_DATA} />
      <Perks data={PERKS_DATA} link={'/book-a-demo'} target={'_blank'} />
      <BenefitsWorks data={BENEFITS_WORKS_DATA} />
      <OurExperties data={EXPERTIES_DATA} />
      <ClientSays data={OUR_CLIENT_SAYS} />
    </>
  );
};

export default HomeTop;
