import React from 'react';
import {
  CLIENT_SLIDER_BREAK_POINTS,
  CLIENTS_SLIDER_DATA,
  OUR_CLIENT_SAYS,
} from '@/constants/homepage';
import {
  DIFFERENCE_DATA,
  EMPLOYEE_SLIDER_DATA,
  EXPERT_TEAM_DATA,
  EXPERTIES_DATA,
  HERO_DATA,
  HIRING_DATA,
  OFFSHORE_DATA,
} from '@/constants/new-home';
import ClientSays from './ClientSays';
import ClientSlider from '../global/ClientSlider';
import HomePageExperties from '../new-home/HomePageExperties';
import HomePageExpertTeam from '../new-home/HomePageExpertTeam';
import HomePageDifference from '../new-home/HomePageDifference';
import HomePageHiringModal from '../new-home/HomePageHiringModal';
import HomePageHero from '../new-home/HomePageHero';
import HomeOffshoreWorks from '../new-home/HomeOffshoreWorks';
import EmployeeSlider from '../new-home/EmployeeSlider';

const HomeTop = () => {
  return (
    <>
      <HomePageHero data={HERO_DATA} />
      <EmployeeSlider data={EMPLOYEE_SLIDER_DATA} />
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
      <HomePageDifference data={DIFFERENCE_DATA} />
      <HomeOffshoreWorks data={OFFSHORE_DATA} />
      <HomePageExpertTeam data={EXPERT_TEAM_DATA} />
      <HomePageExperties data={EXPERTIES_DATA} />
      <HomePageHiringModal data={HIRING_DATA} />
      <ClientSays data={OUR_CLIENT_SAYS} />
    </>
  );
};

export default HomeTop;
