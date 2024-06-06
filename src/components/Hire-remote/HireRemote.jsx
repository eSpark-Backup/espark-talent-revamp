import React from 'react';
import HomePageProcess from '../new-home/HomePageProcess';
import HomePageExpertTeam from '../new-home/HomePageExpertTeam';
import HomePageExperties from '../new-home/HomePageExperties';
import HomePageHiringModal from '../new-home/HomePageHiringModal';
import ClientSays from '../homepage/ClientSays';
import {
  EXPERT_TEAM_DATA,
  EXPERTIES_DATA,
  HIRING_DATA,
  WORKS_DATA,
} from '@/constants/new-home';
import { ACHIEVEMENTS_DATA, OUR_CLIENT_SAYS } from '@/constants/homepage';
import AwardAchievement from '../homepage/AwardAchiefment';
import HireRemoteBanner from './HireRemoteBanner';
import HireRemoteNavbar from './HireRemoteNavbar';

const HireRemote = ({ data }) => {
  return (
    <>
      <HireRemoteNavbar />
      <HireRemoteBanner data={data?.heroSection} />
      <HomePageProcess data={WORKS_DATA} />
      <HomePageExpertTeam data={EXPERT_TEAM_DATA} />
      <HomePageExperties data={EXPERTIES_DATA} />
      <HomePageHiringModal data={HIRING_DATA} />
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
