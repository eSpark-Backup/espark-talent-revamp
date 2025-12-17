'use client';
import React from 'react';
import { Box } from '@mui/material';
import {
  cardStyleForHomePage,
  DIFFERENCE_DATA,
  EMPLOYEE_HERO_DATA,
  ENTIRE_TEAM,
  EXPERT_TEAM_DATA,
  EXPERTIES_DATA,
  GLOBAL_TEAMS,
  HIRING_DATA,
  POWER_PROJECT_DATA,
  TRUSTED_PLATFORM,
} from '@/constants/new-home-ksa';
import HomePageExpertTeam from '@/components/new-home/HomePageExpertTeam';
import EmployeeBanner from '@/components/employment/EmployeeBanner';
import PricingDefference from '@/components/pricing/PricingDefference';
import HomePageHiringModel from '@/components/new-home/HomePageHiringModel';
import PowerProjects from '@/components/new-home/PowerProjects';
import EntierTeam from '@/components/new-home/EntierTeam';
import TrustedPlatform from '@/components/new-home/TrustedPlatform';
import HomeBlogs from '@/components/blogs/HomeBlogs';
import ClientGlobalTeams from '@/components/new-home/ClientGlobalTeams';
import HomePageExperties from '@/components/new-home/HomePageExperties';

const Ksa = () => {
  return (
    <>
      <EmployeeBanner data={EMPLOYEE_HERO_DATA} />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 4, sm: 6, md: 8, lg: 10 },
          py: { xs: 3, sm: 4, md: 7 },
        }}
      >
        <PricingDefference
          data={DIFFERENCE_DATA}
          cardStyle={cardStyleForHomePage}
          titleColor={'#222324'}
          backgroundColorStyle={{
            '@media(min-width:1024px)': {
              backgroundSize: '100%',
              backgroundPosition: 'bottom',
              backgroundImage: `url(${'/images/homepage/hero/hero-image.webp'})`,
            },
          }}
        />
        <HomePageExpertTeam data={EXPERT_TEAM_DATA} />
        <HomePageHiringModel data={HIRING_DATA} />
        <HomePageExperties data={EXPERTIES_DATA} titleColor="#222324" />
        <PowerProjects data={POWER_PROJECT_DATA} />
        <EntierTeam data={ENTIRE_TEAM} />
        <ClientGlobalTeams data={GLOBAL_TEAMS} />
        <TrustedPlatform data={TRUSTED_PLATFORM} />
        <HomeBlogs />
      </Box>
    </>
  );
};

export default Ksa;
