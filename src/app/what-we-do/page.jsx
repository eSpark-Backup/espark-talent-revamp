import React from 'react';

import WhyChooseOurHr from '@/components/whatwedopage/WhyChooseOurHr';
import QuestionAnswer from '@/components/whatwedopage/QuestionAnswer';
import { EXPERT_TEAM_CARD } from '@/constants/what-we-do-page/expert-team-card';
import ExpertTeamCard from '@/components/whatwedopage/ExpertTeamCard';

const page = () => {
  return (
    <>
      <WhyChooseOurHr />
      <QuestionAnswer />
      <ExpertTeamCard teamData={EXPERT_TEAM_CARD} />
    </>
  );
};

export default page;
