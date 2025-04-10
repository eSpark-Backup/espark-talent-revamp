import Hero from '@/components/homepage/Hero';
import ClientSlider from '@/components/global/ClientSlider';
import AwardAchievement from '@/components/homepage/AwardAchiefment';
import OutSourcingItem from '@/components/for-enterprise/OutSourcingItem';
import OutStaffings from '@/components/for-enterprise/OutStaffings';
import OutSourcingWonder from '@/components/for-enterprise/OutSourcingWonder';
import OutSourcingAdvantage from '@/components/for-enterprise/OutSourcingAdvantage';
import Faq from '@/components/FAQ/Faq';
import { getMetadata } from '@/components/global/seo';

import { ENTERPRISE_HERO_DATA } from '@/constants/global/hero-sections';
import { FAQ_DATA_ENTERPRISE } from '@/constants/home-page/faq-section';
import {
  ACHIEVEMENTS_DATA,
  CLIENTS_SLIDER_DATA,
  CLIENT_SLIDER_BREAK_POINTS,
} from '@/constants/homepage';
import {
  OUTSOURCING_ADVANTAGES_DATA,
  OUTSOURCING_LIST_DATA,
  OUTSOURCING_WONDERS_DATA,
  OUTSTAFFING_TRUST_DATA,
} from '@/constants/for-enterprise';

import { getFilteredData } from '@/utils/cors';

const pathname = '/solutions/enterprises';
const filteredData = getFilteredData(pathname);
/**
 * Metadata for this page.
 *
 * This export retrieves metadata using the `getMetadata` function
 * with the provided `filteredData` as input.
 *
 * @constant {Object} metadata - The metadata object for the page.
 */
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <Hero data={ENTERPRISE_HERO_DATA} color="default" />
      <ClientSlider
        data={CLIENTS_SLIDER_DATA}
        breakPoints={CLIENT_SLIDER_BREAK_POINTS}
        length={100}
        fontSize={{
          xs: '19px !important',
          sm: '20px !important',
          md: '22px !important',
          lg: '24px !important',
        }}
        lineHeight={{ xs: '30px !important', sm: '25px !important' }}
        fontWeight={500}
        bgColor={'#fff'}
        txtColor={'#09114A'}
        compeleteTitle={
          'Meet our partners who trust our certified tech experts offering 100% business growth results'
        }
        shortTitle={'Meet our partners who trust our certified tech experts'}
      />
      <OutSourcingItem data={OUTSOURCING_LIST_DATA} />
      <OutSourcingAdvantage data={OUTSOURCING_ADVANTAGES_DATA} />
      <OutSourcingWonder data={OUTSOURCING_WONDERS_DATA} />
      <OutStaffings data={OUTSTAFFING_TRUST_DATA} />
      <AwardAchievement data={ACHIEVEMENTS_DATA} design={2} />
      <Faq data={FAQ_DATA_ENTERPRISE} />
    </>
  );
};

export default Page;
