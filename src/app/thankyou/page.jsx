'use client';
import React from 'react';
import ClientSlider from '@/components/global/ClientSlider';
import ThankYou from '@/components/thankyou/ThankYou';
import {
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
} from '@/constants/homepage';
import { THANKYOU_DATA } from '@/constants/thankyou/thankyou';

const Page = () => {
  return (
    <>
      {' '}
      <ThankYou data={THANKYOU_DATA} />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        bgColor={'##fff'}
        txtColor={'#029894'}
        title={'Meet our partners who trust our certified tech experts'}
        length={100}
        fontSize={{
          xs: '19px !important',
          sm: '20px !important',
          md: '22px !important',
          lg: '28px !important',
        }}
        lineHeight={{ xs: '30px !important', sm: '20px !important' }}
        fontWeight={500}
      />
    </>
  );
};

export default Page;
