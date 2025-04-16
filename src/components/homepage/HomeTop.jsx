import {
  CLIENT_SLIDER_BREAK_POINTS,
  CLIENTS_SLIDER_DATA,
} from '@/constants/new-home/homepage';
import {
  DIFFERENCE_DATA,
  EMPLOYEE_HERO_DATA,
  EXPERT_TEAM_DATA,
  EXPERTIES_DATA,
  HIRING_DATA,
  OFFSHORE_DATA,
} from '@/constants/new-home/new-home';
import ClientSlider from '@/components/global/ClientSlider';
import HomePageExperties from '@/components/new-home/HomePageExperties';
import HomePageExpertTeam from '@/components/new-home/HomePageExpertTeam';
import HomeOffshoreWorks from '@/components/new-home/HomeOffshoreWorks';
import EmployeeBanner from '@/components/employment/EmployeeBanner';
import { Box } from '@mui/material';
import HomePageHiringModel from '@/components/new-home/HomePageHiringModel';
import PricingDefference from '@/components/pricing/PricingDefference';
import { clientSliderBoxStyle } from '@/components/homepage/HomeTopStyles';
import { cardStyleForHomePage } from './HomeTopStyle';
import { cardStyle } from '../pricing/PricingCardStyles';

const HomeTop = () => {
  return (
    <>
      <EmployeeBanner data={EMPLOYEE_HERO_DATA} />
      <PricingDefference
        data={DIFFERENCE_DATA}
        cardStyle={{ cardStyleForHomePage, ...cardStyle }}
        backgroundColorStyle={{
          '@media(min-width:1024px)': {
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundImage: `url(${'/images/homepage/hero/hero-image.png'})`,
          },
        }}
      />
      <HomeOffshoreWorks data={OFFSHORE_DATA} />
      <HomePageExpertTeam data={EXPERT_TEAM_DATA} />
      <HomePageExperties data={EXPERTIES_DATA} />
      <HomePageHiringModel data={HIRING_DATA} />
      <Box sx={clientSliderBoxStyle}>
        <ClientSlider
          data={CLIENTS_SLIDER_DATA}
          breakPoints={CLIENT_SLIDER_BREAK_POINTS}
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
          bgColor={'#029894'}
          txtColor={'#ffffff'}
        />
      </Box>
    </>
  );
};

export default HomeTop;
