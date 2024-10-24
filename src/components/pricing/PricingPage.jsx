import React from 'react';
import ServiceFaq from '../service/ServiceFaq';
import { FAQ_DATA } from '@/constants/home-page/faq-section';
import { cardStyle, DIFFERENCE_DATA } from '@/constants/new-home';
import PricingBenifits from './PricingBenifits';
import PricingHero from './PricingHero';
import PricingDefference from './PricingDefference';
import PricingWorks from './PricingWorks';

const PricingPage = ({ data }) => {
  return (
    <>
      <PricingHero data={data} />
      <PricingBenifits data={data?.benifits} />
      <PricingDefference data={DIFFERENCE_DATA} cardStyle={cardStyle} />
      <PricingWorks data={data?.howItWorks} />
      <ServiceFaq data={FAQ_DATA} color={'#fff'} />
    </>
  );
};

export default PricingPage;
