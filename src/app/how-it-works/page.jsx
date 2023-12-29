import React from 'react';
import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import { HR_FIRM_DATA, OUR_SERVICE } from '@/constants/how-its-works';
import OurService from '@/components/how-it-work/OurService';

const page = () => {
  return (
    <>
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
      <OurService ourService={OUR_SERVICE} />
    </>
  );
};

export default page;
