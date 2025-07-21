'use client';
import React, { useEffect } from 'react';
import {
  ACHIEVEMENTS_DATA,
  BENEFITS_WORKS_DATA,
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
  DEMO_DATA,
  EXPERTIES_DATA,
  OUR_CLIENT_SAYS,
  PROCESS_DATA,
} from '@/constants/homepage';
import ClientSlider from '@/components/global/ClientSlider';
import AwardAchievement from '@/components/homepage/AwardAchiefment';
import ClientSays from '@/components/homepage/ClientSays';
import OurExperties from '@/components/homepage/OurExperties';
import BenefitsWorks from '@/components/homepage/BenefitsWorks';
import DemoCta from '@/components/demo/DemoCta';
import Process from '@/components/homepage/Process';
import BookAMeeting from '@/components/book-a-meeting/BookAMeeting';
import { BOOK_A_MEETING } from '@/constants/book-a-meeting';
import { Box } from '@mui/material';

const MeetingPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <>
      <BookAMeeting data={BOOK_A_MEETING} />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        length={100}
        fontSize={{
          xs: '19px !important',
          sm: '20px !important',
          md: '22px !important',
          lg: '28px !important',
        }}
        lineHeight={{ xs: '30px !important', sm: '25px !important' }}
        fontWeight={500}
        bgColor={'#029894'}
        txtColor={'#fff'}
        shortTitle={'Meet our partners who trust our certified tech experts'}
        compeleteTitle={
          'Meet our partners who trust our certified tech experts'
        }
      />
      <Process data={PROCESS_DATA} />
      <DemoCta data={DEMO_DATA} link={'/book-a-meeting/#top'} />
      <BenefitsWorks data={BENEFITS_WORKS_DATA} />
      <OurExperties data={EXPERTIES_DATA} link={'/book-a-meeting/#top'} />
      <Box sx={{ pt: { xs: 5, sm: 6, md: 7, lg: 10 } }}>
        <ClientSays data={OUR_CLIENT_SAYS} />
      </Box>
      <AwardAchievement
        data={ACHIEVEMENTS_DATA}
        design={1}
        background={'#F7F8FB'}
      />
    </>
  );
};
export default MeetingPage;
