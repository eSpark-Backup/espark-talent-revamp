'use client';

import ClientSlider from '@/components/global/ClientSlider';
import ThankYou from '@/components/thankyou/ThankYou';

import {
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
} from '@/constants/new-home/homepage';
import { THANKYOU_DATA } from '@/constants/thankyou/thankyou';

const Page = () => {
  return (
    <>
      <ThankYou data={THANKYOU_DATA} />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        length={100}
        fontSize={{
          xs: '19px !important',
          sm: '20px !important',
          md: '22px !important',
          lg: '24px !important',
        }}
        lineHeight={{ xs: '30px !important', sm: '25px !important' }}
        fontWeight={500}
        bgColor={'#fff'}
        txtColor={'#029894'}
        compeleteTitle={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
        shortTitle={'Meet our partners who trust our certified tech experts'}
      />
    </>
  );
};

export default Page;
