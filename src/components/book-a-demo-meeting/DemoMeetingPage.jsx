import React from 'react';
import FormSection from '../hire-developer/FormSection';
import ClientSays from '../homepage/ClientSays';
import HowItsWork from './HowItsWork';
import { OUR_CLIENT_SAYS } from '@/constants/homepage';
import DemoLeverageTalent from './DemoLeverageTalent';
import SecondSection from '../hire-developer/SecondSection';
import { Box } from '@mui/material';
import CustomComponent from '../hire-developer/CustomHeading';
import Perks from '../homepage/Perks';
import CustomizedSolution from '../hire-developer/CustomizedSolution';
import { TeamBanner } from './TeamBanner';

const DemoMeetingPage = ({ data }) => {
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
        <CustomComponent
          data={`Here is how our seamless <span style="color:#029894;font-weight:600;" >hiring process</span> unfolds`}
        />
        <Perks
          data={data.seamlessHiringProcess}
          target={'_self'}
          link={'/book-a-demo-meeting/#form'}
        />
      </Box>
      <CustomizedSolution data={data?.customizedSolution} />
      <SecondSection data={data?.secondSection} />
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
