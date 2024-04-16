import ClientSlider from '../global/Client';
import {
  CLIENT_SLIDER_BREAK_POINTS,
  CLIENTS_SLIDER_DATA,
  OUR_CLIENT_SAYS,
  PERKS_DATA,
} from '@/constants/homepage';
import Perks from '../homepage/Perks';
import ClientSays from '../homepage/ClientSays';
import ServiceHeroSection from './ServiceHeroSection';
import ServiceHosts from './ServiceHosts';
import FifthSection from '../hire-developer/FifthSection';
import ServiceWhyHire from './ServiceWhyHire';
import ServiceExperties from './ServiceExperties';
import CustomComponent from '../hire-developer/CustomHeading';
import { Box } from '@mui/material';
import ServiceFaq from './ServiceFaq';

const ServiceSinglePage = ({ data }) => {
  return (
    <>
      <ServiceHeroSection data={data?.heroSection} />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        bgColor={'#029894'}
        txtColor={'#ffffff'}
        compeleteTitle={
          'Meet our partners who trust our certified tech experts'
        }
        shortTitle={'Meet our partners who trust our certified tech experts'}
        length={100}
        fontSize={{
          xs: '19px !important',
          sm: '20px !important',
          md: '22px !important',
          lg: '28px !important',
        }}
        lineHeight={{ xs: '30px !important', sm: '25px !important' }}
        fontWeight={500}
      />
      <ServiceExperties data={data[0]?.experties} />
      <FifthSection data={data[0]?.technologies} />
      <CustomComponent
        data={`Here is how our seamless <span style="color:#029894;font-weight:600;" >hiring process</span> unfolds`}
      />
      <Perks data={PERKS_DATA} link={'/book-a-demo'} target={'_blank'} />
      <ServiceWhyHire data={data[0]?.whyHire} />
      <ClientSays data={OUR_CLIENT_SAYS} />
      <ServiceHosts data={data[0]?.hosts} />
      <Box
        pt={5}
        sx={{
          backgroundColor: '#F7F8FF',
        }}
      >
        <ServiceFaq data={data[0]?.faqs} />
      </Box>
    </>
  );
};

export default ServiceSinglePage;
