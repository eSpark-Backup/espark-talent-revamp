'use client';

import HireHeroSection from '@/components/hire-developer/HireHeroSection';
import ClientSays from '@/components/homepage/ClientSays';
import {
  DEVELOEPRS_PERKS_DATA,
  OUR_CLIENT_SAYS,
} from '@/constants/new-home/homepage';
import Perks from '@/components/homepage/Perks';
import FormSection from '@/components/hire-developer/FormSection';
import { Box } from '@mui/material';
import Hosts from '@/components/hire-developer/Hosts';
import CustomizedSolution from '@/components/hire-developer/CustomizedSolution';
import LetsConnect from '@/components/hire-developer/LetsConnect';
import ModernTechnologies from '@/components/hire-developer/ModernTechnologies';
import {
  clientSaysStyle,
  boxStyle,
} from '@/components/hire-developer/HireDeveloperStyle';
const HireDeveloper = ({ data }) => {
  //  hiring front-end & back-backend developer page components
  const { perksData, styles } = DEVELOEPRS_PERKS_DATA || {};

  return (
    <Box sx={boxStyle}>
      <HireHeroSection data={data?.heroSection} />
      <LetsConnect data={data?.letsConnect} />
      {data?.bgImage && (
        <Box sx={clientSaysStyle(data)}>
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
