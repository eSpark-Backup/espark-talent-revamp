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
import { usePathname } from 'next/navigation';

const HirePage = ({ data }) => {
  console.log(data, 'data');
  const pathname = usePathname();
  console.log(pathname, 'pathname');
  const page = data?.filter((item) => item?.path === pathname);
  console.log(page, 'page');
  return (
    <>
      {/* <HireHeroSection data={page?.heroSection} />
      <SecondSection data={page?.secondSection} />
       <Box>
        <ClientSays data={OUR_CLIENT_SAYS} />
        <CustomComponent />
        <Perks
          data={PERKS_DATA}
          target={'_self'}
          link={'/hire-a-frontend-developer/#form'}
        />
      </Box> 
      <ThirdSection data={page?.thirdSection} />
      <ForthSection data={page?.forthSection} />
      <FifthSection data={page?.fifthSection} />
      <FormSection data={page?.formSection} /> */}
    </>
  );
};

// Define PropTypes
HirePage.propTypes = {
  data: PropTypes.array.isRequired, // Assuming data is an array
};

export default HirePage;