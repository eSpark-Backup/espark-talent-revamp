import ClientSlider from '../global/ClientSlider';
import {
  CLIENT_SLIDER_BREAK_POINTS,
  CLIENTS_SLIDER_DATA,
  DEVELOEPRS_PERKS_DATA,
  OUR_CLIENT_SAYS,
} from '@/constants/homepage';
import Perks from '../homepage/Perks';
import ClientSays from '../homepage/ClientSays';
import ServiceHeroSection from './ServiceHeroSection';
import ServiceWhyHire from './ServiceWhyHire';
import ServiceExperties from './ServiceExperties';
import { Box } from '@mui/material';
import ServiceFaq from './ServiceFaq';
import ModernTechnologies from '../hire-developer/ModernTechnologies';
import Hosts from '../hire-developer/Hosts';

const ServiceSinglePage = ({ data }) => {
  //  hiring services page components
  const { styles } = DEVELOEPRS_PERKS_DATA || {};

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 4, sm: 5, md: 7, lg: 10 },
      }}
    >
      <Box>
        <ServiceHeroSection data={data?.servicesHeroSection} />
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
      </Box>
      <ServiceExperties data={data?.experties} />
      <ModernTechnologies data={data?.modernTechnologies} />
      <Perks
        data={data?.perks}
        styles={styles}
        btnText={data?.perkBtnTitle}
        btnLink={'/book-a-demo'}
        target={'_blank'}
        title={data?.perkTitle}
      />
      <ServiceWhyHire data={data?.whyHire} />
      <Box>
        <ClientSays data={OUR_CLIENT_SAYS} />
        <Hosts data={data?.hosts} />
      </Box>
      <Box
        sx={{
          backgroundColor: '#F7F8FF',
          pt: { xs: 3, md: 5 },
        }}
      >
        <ServiceFaq data={data?.faqs} />
      </Box>
    </Box>
  );
};

export default ServiceSinglePage;
