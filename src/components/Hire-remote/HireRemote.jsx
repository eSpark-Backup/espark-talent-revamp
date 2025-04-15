'use client';

import { useState } from 'react';
import HomePageExperties from '@/components/new-home/HomePageExperties';
import ClientSays from '@/components/homepage/ClientSays';
import {
  cardStyle,
  DIFFERENCE_DATA_FOR_REMOTE,
  EXPERT_TEAM_DATA,
  EXPERTIES_DATA,
} from '@/constants/new-home/new-home';
import {
  ACHIEVEMENTS_DATA,
  OUR_CLIENT_SAYS,
} from '@/constants/new-home/homepage';
import AwardAchievement from '@/components/homepage/AwardAchiefment';
import HireRemoteBanner from '@/components/hire-remote/HireRemoteBanner';
import PricingDefference from '@/components/pricing/PricingDefference';
import PricingHero from '@/components/pricing/PricingHero';
import { PRICING_DATA } from '@/constants/pricing/pricing';
import PricingBenifits from '@/components/pricing/PricingBenifits';
import PricingWorks from '@/components/pricing/PricingWorks';
import DefaultNavbar from '@/components/global/navbar/DefaultNavbar';
import { Hire_Remote_Routes } from '@/constants/global/routes';
import { BOOK_A_DEMO, HIRE_A_TALENT_LINK } from '@/constants/global/header';
import HireModal from '@/components/hire-remote/HireModal';
import BookADemoForm from '@/components/book-a-demo/BookADemoForm';
import { Book_A_Demo_Data } from '@/constants/book-a-demo/book-a-demo';
import HireRemoteFooterCta from '@/components/hire-remote/HireRemoteFooterCta';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';
import HomePageExpertTeam from '@/components/new-home/HomePageExpertTeam';

const HireRemote = ({ data }) => {
  const [open, setOpen] = useState(false);

  /**
   * Handles the action of opening a modal or dialog by setting the `open` state to `true`.
   * Typically used to display additional content or a detailed view.
   */
  const handleOpen = () => setOpen(true);
  /**
   * Closes the modal by setting the `open` state to `false`.
   *
   * @function handleModalClose
   * @returns {void}
   */
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
      <HomePageExpertTeam data={EXPERT_TEAM_DATA} handleOpen={handleOpen} />
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
