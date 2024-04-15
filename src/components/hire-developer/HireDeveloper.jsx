'use client';
import React from 'react';
import PropTypes from 'prop-types';
import HireHeroSection from './HireHeroSection';
import ClientSays from '../homepage/ClientSays';
import { DEVELOEPRS_PERKS_DATA, OUR_CLIENT_SAYS } from '@/constants/homepage';
import Perks from '../homepage/Perks';
import SecondSection from './SecondSection';
import FifthSection from './FifthSection';
import FormSection from './FormSection';
import CustomComponent from './CustomHeading';
import { Box } from '@mui/material';
import Hosts from './Hosts';
import CustomizedSolution from './CustomizedSolution';

const HireDeveloper = ({ data }) => {
  return (
    <>
      <HireHeroSection data={data?.heroSection} />
      <SecondSection data={data?.secondSection} />
      <Box
        sx={{
          backgroundImage: `url(${data?.bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `100%`,
          color: '#fff',
        }}
      >
        <ClientSays data={OUR_CLIENT_SAYS} />
        <CustomComponent
          data={`Here is how our seamless <span style="color:#029894;font-weight:600;" >hiring process</span> unfolds`}
        />
        <Perks
          data={DEVELOEPRS_PERKS_DATA}
          target={'_self'}
          link={'/hire-a-frontend-developer/#form'}
        />
      </Box>
      <Hosts data={data?.hosts} />
      <CustomizedSolution data={data?.customizedSolution} />
      <FifthSection data={data?.fifthSection} />
      <FormSection data={data?.formSection} />
    </>
  );
};

// Define PropTypes
HireDeveloper.propTypes = {
  data: PropTypes.array.isRequired, // Assuming data is an array
};

export default HireDeveloper;
