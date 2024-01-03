import React from 'react';
import { CLIENTS_SLIDER_DATA } from '@/constants/homepage';
import {
  BUSINESS_START_UP,
  OUR_OUTSOURCE,
  OUTSOURCING_SOLUTIONS_DATA,
} from '@/constants/for-startup';
import ClientSlider from '@/components/global/clientSlider';
import OutSourcingSolutions from '@/components/for-startup/outSourcingSolutions';
import OurOutsourcing from '@/components/for-startup/OurOutsourcing';
import TalentIgnite from '@/components/for-startup/TalentIgnite';

const page = () => {
  return (
    <>
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        bgColor={'#3B59980A'}
        txtColor={'#001C63'}
        fontWeight={500}
        title={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
      />
      <OurOutsourcing data={OUR_OUTSOURCE} />
      <TalentIgnite data={BUSINESS_START_UP} />
      <OutSourcingSolutions data={OUTSOURCING_SOLUTIONS_DATA} />
    </>
  );
};

export default page;
