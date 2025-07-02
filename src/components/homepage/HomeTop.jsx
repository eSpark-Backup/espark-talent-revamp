import React from 'react';
import {
  // cardStyleForHomePage,
  // DIFFERENCE_DATA,
  // EMPLOYEE_HERO_DATA,
  // ENTIRE_TEAM,
  // EXPERT_TEAM_DATA,
  // EXPERTIES_DATA,
  GLOBAL_TEAMS,
  // HIRING_DATA,
  // POWER_PROJECT_DATA,
  TRUSTED_PLATFORM,
} from '@/constants/new-home';
// import HomePageExperties from '../new-home/HomePageExperties';
// import HomePageExpertTeam from '../new-home/HomePageExpertTeam';
// import EmployeeBanner from '../employment/EmployeeBanner';
// import PricingDefference from '../pricing/PricingDefference';
// import HomePageHiringModel from '../new-home/HomePageHiringModel';
// import PowerProjects from '../new-home/PowerProjects';
// import EntierTeam from '../new-home/EntierTeam';
import GlobalTeams from '../new-home/GlobalTeams';
import TrustedPlatform from '../new-home/TrustedPlatform';
import { Box } from '@mui/material';
import HomeBlogs from '../blogs/HomeBlogs';
import Link from 'next/link';

const HomeTop = () => {
  return (
    <>
      {/* <EmployeeBanner data={EMPLOYEE_HERO_DATA} /> */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 4, sm: 6, md: 8, lg: 10 },
          py: { xs: 3, sm: 4, md: 7 },
        }}
      >
        {/* <PricingDefference
          data={DIFFERENCE_DATA}
          cardStyle={cardStyleForHomePage}
          titleColor={'#222324'}
          backgroundColorStyle={{
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
        <EntierTeam data={ENTIRE_TEAM} /> */}
        <Link
          href="/uae"
          prefetch={true}
          style={{
            display: 'inline-block',
            marginBottom: '20px',
            padding: '10px 15px',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
          }}
        >
          Test Link (Click Me)
        </Link>
        <GlobalTeams data={GLOBAL_TEAMS} />
        <TrustedPlatform data={TRUSTED_PLATFORM} />
        <HomeBlogs />
      </Box>
    </>
  );
};

export default HomeTop;
