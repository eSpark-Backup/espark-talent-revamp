import { HIRE_FRONTEND_DEVELOPER } from '@/constants/hire-a-frontend-developer/hire-a-frontend-developer';
import React from 'react';
import HireHeroSection from './HireHeroSection';
import ClientSays from '../homepage/ClientSays';
import { OUR_CLIENT_SAYS, PERKS_DATA } from '@/constants/homepage';
import Perks from '../homepage/Perks';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import ForthSection from './ForthSection';
import FifthSection from './FifthSection';
import FormSection from './FormSection';

const HireAFrontendDeveloper = () => {
  return (
    <div>
      <HireHeroSection data={HIRE_FRONTEND_DEVELOPER?.heroSection} />
      <SecondSection data={HIRE_FRONTEND_DEVELOPER?.secondSection} />
      <ClientSays data={OUR_CLIENT_SAYS} />
      <Perks data={PERKS_DATA} />
      <ThirdSection data={HIRE_FRONTEND_DEVELOPER?.thirdSection} />
      <ForthSection data={HIRE_FRONTEND_DEVELOPER?.forthSection} />
      <FifthSection data={HIRE_FRONTEND_DEVELOPER?.fifthSection} />
      <FormSection data={HIRE_FRONTEND_DEVELOPER?.formSection} />
    </div>
  );
};
 
export default HireAFrontendDeveloper;
