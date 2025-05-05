import React from 'react';
import {
  cardStyleForHomePage,
  DIFFERENCE_DATA,
  EMPLOYEE_HERO_DATA,
  EXPERT_TEAM_DATA,
  EXPERTIES_DATA,
  HIRING_DATA,
  POWER_PROJECT_DATA,
} from '@/constants/new-home';
import HomePageExperties from '../new-home/HomePageExperties';
import HomePageExpertTeam from '../new-home/HomePageExpertTeam';
import EmployeeBanner from '../employment/EmployeeBanner';
import PricingDefference from '../pricing/PricingDefference';
import HomePageHiringModel from '../new-home/HomePageHiringModel';
import PowerProjects from '../new-home/PowerProjects';

const HomeTop = () => {
  return (
    <>
      <EmployeeBanner data={EMPLOYEE_HERO_DATA} />
      <PricingDefference
        data={DIFFERENCE_DATA}
        cardStyle={cardStyleForHomePage}
        titleColor={'#222324'}
        backgroundColorStyle={{
          mt: { xs: 2, lg: 5 },
          '@media(min-width:1024px)': {
            backgroundSize: '100%',
            backgroundPosition: 'bottom',
            backgroundImage: `url(${'/images/homepage/hero/hero-image.png'})`,
          },
        }}
      />
      <HomePageExpertTeam data={EXPERT_TEAM_DATA} />
      <HomePageHiringModel data={HIRING_DATA} />
      <HomePageExperties data={EXPERTIES_DATA} titleColor="#222324" />
      <PowerProjects data={POWER_PROJECT_DATA} />
    </>
  );
};

export default HomeTop;
