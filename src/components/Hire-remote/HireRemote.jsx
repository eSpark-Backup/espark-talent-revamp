import React from 'react';
import HomePageExpertTeam from '../new-home/HomePageExpertTeam';
import HomePageExperties from '../new-home/HomePageExperties';
import ClientSays from '../homepage/ClientSays';
import {
  DIFFERENCE_DATA,
  EXPERT_TEAM_DATA,
  EXPERTIES_DATA,
} from '@/constants/new-home';
import { ACHIEVEMENTS_DATA, OUR_CLIENT_SAYS } from '@/constants/homepage';
import AwardAchievement from '../homepage/AwardAchiefment';
import HireRemoteBanner from './HireRemoteBanner';
import PricingDefference from '../pricing/PricingDefference';
import PricingHero from '../pricing/PricingHero';
import BlueCard from '../pricing/BlueCard';
import { PRICING_DATA } from '@/constants/pricing';
import { Box } from '@mui/material';
import PricingBenifits from '../pricing/PricingBenifits';
import PricingWorks from '../pricing/PricingWorks';
import DefaultNavbar from '../global/Navbar/DefaultNavbar';
import { Hire_Remote_Routes } from '@/constants/routes';
import { BOOK_A_DEMO, HIRE_A_TALENT_LINK } from '@/constants/global/header';

const HireRemote = ({ data }) => {
  return (
    <>
      <DefaultNavbar
        layout={'remote'}
        routes={Hire_Remote_Routes}
        sticky
        action={{
          type: 'external',
          route: HIRE_A_TALENT_LINK,
          label: BOOK_A_DEMO,
          color: 'info',
          style: {
            display: 'none',
            '@media(min-width: 988px)': {
              display: 'block',
            },
            width: { xs: '150px', md: '180px', lg: '223px' },
            height: { xs: '44px', md: '46px', lg: '48px' },
            backgroundColor: '#101828',
            borderRadius: '100px',
            color: '#fff',
            fontSize: '20px',
            '&:hover': {
              backgroundColor: '#1c4e72',
              color: '#fff',
            },
          },
        }}
      />
      <HireRemoteBanner data={data?.heroSection} />
      <PricingDefference data={DIFFERENCE_DATA} />
      <PricingHero data={PRICING_DATA} />
      <Box
        sx={{
          mt: 5,
          mb: 3,
          display: 'none',
          '@media(max-width: 783px)': {
            display: 'flex',
          },
        }}
      >
        <BlueCard data={PRICING_DATA} />
      </Box>
      <PricingBenifits data={PRICING_DATA?.benifits} />
      <PricingWorks data={PRICING_DATA?.howItWorks} />
      <HomePageExpertTeam data={EXPERT_TEAM_DATA} />
      <HomePageExperties data={EXPERTIES_DATA} />
      <ClientSays data={OUR_CLIENT_SAYS} />
      <AwardAchievement
        data={ACHIEVEMENTS_DATA}
        design={1}
        background={'#F7F8FB'}
      />
    </>
  );
};

export default HireRemote;
