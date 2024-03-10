'use client';
import React from 'react';
import PropTypes from 'prop-types';
import HireHeroSection from './HireHeroSection';
import ClientSays from '../homepage/ClientSays';
import { OUR_CLIENT_SAYS, PERKS_DATA } from '@/constants/homepage';
import Perks from '../homepage/Perks';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import ForthSection from './ForthSection';
import FifthSection from './FifthSection';
import FormSection from './FormSection';
import CustomComponent from './CustomHeading';
import { Box } from '@mui/material';

const HireAFrontendDeveloper = ({ data }) => {
  // const pathname = usePathname();
  // const page = data?.filter((item) => item?.path === pathname)[0];
  return (
    <>
      <HireHeroSection data={data?.heroSection} />
      <SecondSection data={data?.secondSection} />
       <Box>
        <ClientSays data={OUR_CLIENT_SAYS} />
        <CustomComponent />
        <Perks
          data={PERKS_DATA}
          target={'_self'}
          link={'/hire-a-frontend-developer/#form'}
        />
      </Box> 
      <ThirdSection data={data?.thirdSection} />
      <ForthSection data={data?.forthSection} />
      <FifthSection data={data?.fifthSection} />
      <FormSection data={data?.formSection} />
    </>
  );
};

// Define PropTypes
HireAFrontendDeveloper.propTypes = {
  data: PropTypes.array.isRequired, // Assuming data is an array
};

export default HireAFrontendDeveloper;