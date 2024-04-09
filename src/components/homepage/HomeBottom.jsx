import React from 'react';
import AwardAchievement from './AwardAchiefment';
import { ACHIEVEMENTS_DATA } from '@/constants/homepage';
import { FAQ_DATA } from '@/constants/home-page/faq-section';
import Faq from '../FAQ/Faq';

const HomeBottom = () => {
  return (
    <>
      <AwardAchievement
        data={ACHIEVEMENTS_DATA}
        design={1}
        background={'#F7F8FB'}
      />
      <Faq data={FAQ_DATA} />
    </>
  );
};

export default HomeBottom;
