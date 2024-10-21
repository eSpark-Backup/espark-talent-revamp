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

const DemoMeetingPage = ({ data }) => {
  const { styles } = DEVELOEPRS_PERKS_DATA || {};

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 4, sm: 5, md: 7, lg: 10 },
        }}
      >
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
      <Box sx={{ position: 'relative' }}>
        <Box
          component={'img'}
          src={data?.bgImage}
          sx={{
            width: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            display: 'none',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            '@media(min-width: 1300px)': {
              display: 'flex',
            },
          }}
        />
        <PricingWorks data={data?.howItWorks} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 4, sm: 5, md: 7, lg: 10 },
            pb: { xs: 5, sm: 6, md: 7, lg: 10 },
          }}
        >
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
