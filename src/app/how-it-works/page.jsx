import React from 'react';
import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import { HR_FIRM_DATA } from '@/constants/how-its-works';

const page = () => {
  return (
    <>
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
    </>
  );
};

export default page;
