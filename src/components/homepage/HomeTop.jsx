import React from 'react';
import {
  CLIENT_SLIDER_BREAK_POINTS,
  CLIENTS_SLIDER_DATA,
} from '@/constants/homepage';
import {
  DIFFERENCE_DATA,
  EMPLOYEE_HERO_DATA,
  EMPLOYEE_SLIDER_DATA,
  EXPERT_TEAM_DATA,
  EXPERTIES_DATA,
  HIRING_DATA,
  OFFSHORE_DATA,
} from '@/constants/new-home';
import ClientSlider from '../global/ClientSlider';
import HomePageExperties from '../new-home/HomePageExperties';
import HomePageExpertTeam from '../new-home/HomePageExpertTeam';
import HomePageDifference from '../new-home/HomePageDifference';
import HomePageHiringModal from '../new-home/HomePageHiringModal';
import HomeOffshoreWorks from '../new-home/HomeOffshoreWorks';
import EmployeeBanner from '../employment/EmployeeBanner';
import EmployeeSlider from '../new-home/EmployeeSlider';
import { Box } from '@mui/material';

const HomeTop = () => {
  return (
    <>
      <EmployeeBanner data={EMPLOYEE_HERO_DATA} />
      <EmployeeSlider data={EMPLOYEE_SLIDER_DATA} />
      <HomePageDifference data={DIFFERENCE_DATA} />
      <HomeOffshoreWorks data={OFFSHORE_DATA} />
      <HomePageExpertTeam data={EXPERT_TEAM_DATA} />
      <HomePageExperties data={EXPERTIES_DATA} />
      <HomePageHiringModal data={HIRING_DATA} />
      <Box sx={{ pt: { xs: 4, md: 2 }, pb: 2 }}>
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
