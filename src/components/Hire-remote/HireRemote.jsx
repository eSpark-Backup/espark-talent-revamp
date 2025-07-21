'use client';
import React, { useState } from 'react';
import HomePageExperties from '../new-home/HomePageExperties';
import ClientSays from '../homepage/ClientSays';
import {
  cardStyle,
  DIFFERENCE_DATA_FOR_REMOTE,
  EXPERT_TEAM_DATA,
  EXPERTIES_DATA,
} from '@/constants/new-home';
import { ACHIEVEMENTS_DATA, OUR_CLIENT_SAYS } from '@/constants/homepage';
import AwardAchievement from '../homepage/AwardAchiefment';
import HireRemoteBanner from './HireRemoteBanner';
import PricingDefference from '../pricing/PricingDefference';
import PricingHero from '../pricing/PricingHero';
import { PRICING_DATA } from '@/constants/pricing';
import PricingBenifits from '../pricing/PricingBenifits';
import PricingWorks from '../pricing/PricingWorks';
import DefaultNavbar from '../global/Navbar/DefaultNavbar';
import { Hire_Remote_Routes } from '@/constants/routes';
import { BOOK_A_DEMO, HIRE_A_TALENT_LINK } from '@/constants/global/header';
import HireModal from './HireModal';
import BookADemoForm from '../book-a-demo/BookADemoForm';
import { Book_A_Demo_Data } from '@/constants/book-a-demo';
import HireRemoteFooterCta from './HireRemoteFooterCta';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';
import HomePageExpertTeam from '../new-home/HomePageExpertTeam';

const HireRemote = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const { form } = Book_A_Demo_Data;
  return (
    <>
      <DefaultNavbar
        handleOpen={handleOpen}
        layout={'remote'}
        routes={Hire_Remote_Routes}
        sticky
        action={{
          type: 'external',
          route: HIRE_A_TALENT_LINK,
          label: BOOK_A_DEMO,
        }}
      />
      <HireRemoteBanner
        data={data?.heroSection}
        styles={data?.heroSection?.styles}
        handleOpen={handleOpen}
      />
      <HireModal
        content={
          <BookADemoForm form={form} handleModalClose={handleModalClose} />
        }
        open={open}
        handleModalClose={handleModalClose}
      />
      <PricingDefference
        data={DIFFERENCE_DATA_FOR_REMOTE}
        cardStyle={cardStyle}
      />
      <PricingHero data={PRICING_DATA} handleOpen={handleOpen} />
      <PricingBenifits data={PRICING_DATA?.benifits} />
      <PricingWorks data={PRICING_DATA?.howItWorks} />
      <HomePageExpertTeam data={EXPERT_TEAM_DATA} />
      <HomePageExperties data={EXPERTIES_DATA} />
      <ClientSays data={OUR_CLIENT_SAYS} />
      <AwardAchievement
        data={ACHIEVEMENTS_DATA}
        design={1}
        background={'#F7F8FB'}
      />
      <HireRemoteFooterCta data={FOOTER_CTA_DATA} handleOpen={handleOpen} />
    </>
  );
};

export default HireRemote;
