import React from 'react';
import {
  CLIENT_SLIDER_BREAK_POINTS,
  CLIENTS_SLIDER_DATA,
} from '@/constants/homepage';
import {
  cardStyleForHomePage,
  DIFFERENCE_DATA,
  EMPLOYEE_HERO_DATA,
  EXPERT_TEAM_DATA,
  EXPERTIES_DATA,
  HIRING_DATA,
  OFFSHORE_DATA,
} from '@/constants/new-home';
import ClientSlider from '../global/ClientSlider';
import HomePageExperties from '../new-home/HomePageExperties';
import HomePageExpertTeam from '../new-home/HomePageExpertTeam';
import HomeOffshoreWorks from '../new-home/HomeOffshoreWorks';
import EmployeeBanner from '../employment/EmployeeBanner';
import { Box } from '@mui/material';
import HomePageHiringModel from '../new-home/HomePageHiringModel';
import PricingDefference from '../pricing/PricingDefference';

const HomeTop = () => {
  return (
    <>
      <EmployeeBanner data={EMPLOYEE_HERO_DATA} />
      <PricingDefference
        data={DIFFERENCE_DATA}
        cardStyle={cardStyleForHomePage}
        backgroundColorStyle={{
          '@media(min-width:1024px)': {
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundImage: `url(${'/images/homepage/hero/hero-image.png'})`,
          },
        }}
      />
      <HomeOffshoreWorks data={OFFSHORE_DATA} />
      <HomePageExpertTeam data={EXPERT_TEAM_DATA} />
      <HomePageExperties data={EXPERTIES_DATA} />
      <HomePageHiringModel data={HIRING_DATA} />
      <Box sx={{ pt: { xs: 4, md: 4.5 }, pb: 2 }}>
        <ClientSlider
          data={CLIENTS_SLIDER_DATA}
          breakPoints={CLIENT_SLIDER_BREAK_POINTS}
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
          bgColor={'#029894'}
          txtColor={'#ffffff'}
        />
      </Box>
    </>
  );
};

export default HomeTop;
