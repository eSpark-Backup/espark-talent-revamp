import React from 'react';

import WhyChooseOurHr from '@/components/whatwedopage/WhyChooseOurHr';
import QuestionAnswer from '@/components/whatwedopage/QuestionAnswer';
import ProfessionalTeamCard from '@/components/whatwedopage/ProfessionalTeamCard';
import { TEAM_CARD_DATA } from '@/constants/what-we-do-page/professional-team';

const page = () => {
  return (
    <>
      <WhyChooseOurHr />
      <QuestionAnswer />
      <ProfessionalTeamCard teamData={TEAM_CARD_DATA} />
    </>
  );
};

export default page;
