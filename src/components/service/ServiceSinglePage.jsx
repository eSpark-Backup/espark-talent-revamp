import ClientSlider from '@/components/global/ClientSlider';
import {
  CLIENT_SLIDER_BREAK_POINTS,
  CLIENTS_SLIDER_DATA,
  DEVELOEPRS_PERKS_DATA,
  OUR_CLIENT_SAYS,
} from '@/constants/new-home/homepage';
import Perks from '@/components/homepage/Perks';
import ClientSays from '@/components/homepage/ClientSays';
import ServiceHeroSection from '@/components/service/ServiceHeroSection';
import ServiceWhyHire from '@/components/service/ServiceWhyHire';
import ServiceExperties from '@/components/service/ServiceExperties';
import { Box } from '@mui/material';
import ServiceFaq from '@/components/service/ServiceFaq';
import ModernTechnologies from '@/components/hire-developer/ModernTechnologies';
import Hosts from '@/components/hire-developer/Hosts';
import {
  containerStyle,
  serviceFaqsStyle,
} from '@/components/service/ServiceSinglePageStyles.js';

const ServiceSinglePage = ({ data }) => {
  //  hiring services page components
  const { styles } = DEVELOEPRS_PERKS_DATA || {};

  return (
    <Box sx={containerStyle}>
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
      <Box sx={serviceFaqsStyle}>
        <ServiceFaq data={data?.faqs} />
      </Box>
    </Box>
  );
};

export default ServiceSinglePage;
