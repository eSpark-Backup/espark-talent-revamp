'use client';
import React from 'react';
import HireHeroSection from './HireHeroSection';
import ClientSays from '../homepage/ClientSays';
import { DEVELOEPRS_PERKS_DATA, OUR_CLIENT_SAYS } from '@/constants/homepage';
import Perks from '../homepage/Perks';
import FormSection from './FormSection';
import { Box } from '@mui/material';
import Hosts from './Hosts';
import CustomizedSolution from './CustomizedSolution';
import LetsConnect from './LetsConnect';
import ModernTechnologies from './ModernTechnologies';

const HireDeveloper = ({ data }) => {
  //  hiring front-end & back-backend developer page components
  const { perksData, styles } = DEVELOEPRS_PERKS_DATA || {};

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 4, sm: 5, md: 7, lg: 10 },
        pb: { xs: 5, sm: 6, md: 7, lg: 10 },
      }}
    >
      <HireHeroSection data={data?.heroSection} />
      <LetsConnect data={data?.letsConnect} />
      {data?.bgImage && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 4, sm: 5, md: 7, lg: 10 },
            backgroundImage: `url(${data?.bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `center`,
            color: '#fff',
          }}
        >
          <ClientSays data={OUR_CLIENT_SAYS} />
          <Perks
            data={perksData}
            styles={styles}
            target={'_self'}
            btnText={'Hire a Developer'}
            btnLink={'/hire-a-frontend-developer/#form'}
            title={`Here is how our seamless <span style="color:#029894;font-weight:600;" >hiring process</span> unfolds`}
          />
        </Box>
      )}
      <Hosts data={data?.hosts} />
      <CustomizedSolution data={data?.customizedSolution} />
      <ModernTechnologies data={data?.modernTechnologies} />
      <FormSection data={data?.formSection} />
    </Box>
  );
};

export default HireDeveloper;
