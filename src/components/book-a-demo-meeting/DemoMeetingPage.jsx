import { Box } from '@mui/material';
import {
  DEVELOEPRS_PERKS_DATA,
  OUR_CLIENT_SAYS,
} from '@/constants/new-home/homepage';
import ClientSays from '@/components/homepage/ClientSays';
import Perks from '@/components/homepage/Perks';
import CustomizedSolution from '@/components/hire-developer/CustomizedSolution';
import FormSection from '@/components/hire-developer/FormSection';
import LetsConnect from '@/components/hire-developer/LetsConnect';
import PricingWorks from '@/components/pricing/PricingWorks';
import DemoLeverageTalent from '@/components/book-a-demo-meeting/DemoLeverageTalent';
import {
  teamBannerBoxStyles,
  letsConnectBoxStyles,
  pricingWorksContainerStyle,
  priicingWorksBoxStyle,
  clientSaysStyle,
  formBoxStyle,
} from '@/components/book-a-demo-meeting/DemoMeetingPageStyles';
import { TeamBanner } from '@/components/book-a-demo-meeting/TeamBanner';

const DemoMeetingPage = ({ data }) => {
  const { styles } = DEVELOEPRS_PERKS_DATA || {};

  return (
    <>
      <Box sx={teamBannerBoxStyles}>
        <TeamBanner data={data?.teamBanner} />
        <Perks
          data={data?.seamlessHiringProcess}
          styles={styles}
          target={'_self'}
          link={'/book-a-demo-meeting/#form'}
          title={`Here is how our seamless <span style="color:#029894;font-weight:600;" >hiring process</span> unfolds`}
        />
        <CustomizedSolution data={data?.customizedSolution} />
        <Box sx={letsConnectBoxStyles}>
          <LetsConnect data={data?.letsConnect} />
        </Box>
        <DemoLeverageTalent data={data?.leverageTalent} />
      </Box>
      <Box sx={pricingWorksContainerStyle}>
        <Box component={'img'} src={data?.bgImage} sx={priicingWorksBoxStyle} />
        <PricingWorks data={data?.howItWorks} />
        <Box sx={clientSaysStyle}>
          <ClientSays data={OUR_CLIENT_SAYS} />
          <Box sx={formBoxStyle}>
            <FormSection data={data?.formSection} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DemoMeetingPage;
