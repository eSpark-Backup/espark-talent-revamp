import React from 'react';
import FormSection from '../hire-developer/FormSection';
import ClientSays from '../homepage/ClientSays';
import HowItsWork from './HowItsWork';
import { DEVELOEPRS_PERKS_DATA, OUR_CLIENT_SAYS } from '@/constants/homepage';
import DemoLeverageTalent from './DemoLeverageTalent';
import { Box } from '@mui/material';
import Perks from '../homepage/Perks';
import CustomizedSolution from '../hire-developer/CustomizedSolution';
import { TeamBanner } from './TeamBanner';
import LetsConnect from '../hire-developer/LetsConnect';

const DemoMeetingPage = ({ data }) => {
  const { styles } = DEVELOEPRS_PERKS_DATA || {};

  return (
    <>
      <TeamBanner data={data?.teamBanner} />
      <Box
        sx={{
          backgroundImage: `url(${data?.bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `100%`,
          color: '#fff',
        }}
      >
        <Perks
          data={data?.seamlessHiringProcess}
          styles={styles}
          target={'_self'}
          link={'/book-a-demo-meeting/#form'}
          title={`Here is how our seamless <span style="color:#029894;font-weight:600;" >hiring process</span> unfolds`}
        />
      </Box>
      <CustomizedSolution data={data?.customizedSolution} />
      <LetsConnect data={data?.letsConnect} />
      <DemoLeverageTalent data={data?.leverageTalent} />
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
        <HowItsWork data={data?.howItWorks} />
        <ClientSays data={OUR_CLIENT_SAYS} />
        <FormSection data={data?.formSection} />
      </Box>
    </>
  );
};

export default DemoMeetingPage;
