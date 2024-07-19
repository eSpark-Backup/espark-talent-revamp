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
import HireRemoteNavbar from './HireRemoteNavbar';
import PricingDefference from '../pricing/PricingDefference';
import PricingHero from '../pricing/PricingHero';
import BlueCard from '../pricing/BlueCard';
import { PRICING_DATA } from '@/constants/pricing';
import { Box } from '@mui/material';
import PricingBenifits from '../pricing/PricingBenifits';
import PricingWorks from '../pricing/PricingWorks';

const HireRemote = ({ data }) => {
  return (
    <>
      <HireRemoteNavbar />
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
