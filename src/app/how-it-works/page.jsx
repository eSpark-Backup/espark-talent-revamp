import React from 'react';
import HRFirmSuccess from '@/components/how-it-work/HRFirmSuccess';
import { HR_FIRM_DATA, CHOOSE_US } from '@/constants/how-its-works';
import ChooseUs from '@/components/how-it-work/ChooseUs';

const page = () => {
  return (
    <>
      <HRFirmSuccess hrFirm={HR_FIRM_DATA} />
      <ChooseUs chooseUs={CHOOSE_US} />
    </>
  );
};

export default page;
