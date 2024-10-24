import React from 'react';
import FormSection from '../hire-developer/FormSection';
import ClientSays from '../homepage/ClientSays';
import { DEVELOEPRS_PERKS_DATA, OUR_CLIENT_SAYS } from '@/constants/homepage';
import DemoLeverageTalent from './DemoLeverageTalent';
import { Box } from '@mui/material';
import Perks from '../homepage/Perks';
import CustomizedSolution from '../hire-developer/CustomizedSolution';
import { TeamBanner } from './TeamBanner';
import LetsConnect from '../hire-developer/LetsConnect';
import PricingWorks from '../pricing/PricingWorks';
import {
  containerStyles,
  contentStyles,
  imageStyles,
} from '@/constants/book-demo-meeting/book-demo-meeting';

const DemoMeetingPage = ({ data }) => {
  const { styles } = DEVELOEPRS_PERKS_DATA || {};

  return (
    <>
      <Box sx={containerStyles}>
        <TeamBanner data={data?.teamBanner} />
        <Perks
          data={data?.seamlessHiringProcess}
          styles={styles}
          target={'_self'}
          link={'/book-a-demo-meeting/#form'}
          title={`Here is how our seamless <span style="color:#029894;font-weight:600;" >hiring process</span> unfolds`}
        />
        <CustomizedSolution data={data?.customizedSolution} />
        <Box sx={{ mt: { xs: -2, md: -2.5, lg: -3.5 } }}>
          <LetsConnect data={data?.letsConnect} />
        </Box>
        <DemoLeverageTalent data={data?.leverageTalent} />
      </Box>
      <Box sx={imageStyles}>
        <Box component={'img'} src={data?.bgImage} />
        <PricingWorks data={data?.howItWorks} />
        <Box sx={contentStyles}>
          <ClientSays data={OUR_CLIENT_SAYS} />
          <Box sx={{ position: 'relative', zIndex: 3 }}>
            <FormSection data={data?.formSection} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DemoMeetingPage;
