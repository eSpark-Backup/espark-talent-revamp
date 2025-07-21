import React from 'react';
import AwardAchievement from './AwardAchiefment';
import { ACHIEVEMENTS_DATA } from '@/constants/homepage';
import { FAQ_DATA } from '@/constants/home-page/faq-section';
import ServiceFaq from '../service/ServiceFaq';

const HomeBottom = () => {
  return (
    <>
      <AwardAchievement
        data={ACHIEVEMENTS_DATA}
        design={1}
        background={'#F7F8FB'}
      />
      <ServiceFaq data={FAQ_DATA} color={'#fff'} />
    </>
  );
};

export default HomeBottom;
