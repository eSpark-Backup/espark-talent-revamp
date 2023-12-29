import React from 'react';
import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import { HR_FIRM_DATA, OUR_OFFERED_SERVICES } from '@/constants/how-its-works';
import OurQualityService from '@/components/how-it-work/OurQualityService';

const page = () => {
  return (
    <>
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
      <OurQualityService ourQualityService={OUR_OFFERED_SERVICES} />
    </>
  );
};

export default page;
