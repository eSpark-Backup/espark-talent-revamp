import ServiceFaq from '@/components/service/ServiceFaq';
import { FAQ_DATA } from '@/constants/home-page/faq-section';
import { DIFFERENCE_DATA } from '@/constants/new-home/new-home';
import PricingBenifits from '@/components/pricing/PricingBenifits';
import PricingHero from '@/components/pricing/PricingHero';
import PricingDefference from '@/components/pricing/PricingDefference';
import PricingWorks from '@/components/pricing/PricingWorks';
const PricingPage = ({ data }) => {
  return (
    <>
      <PricingHero data={data} />
      <PricingBenifits data={data?.benifits} />
      <PricingDefference data={DIFFERENCE_DATA} />
      <PricingWorks data={data?.howItWorks} />
      <ServiceFaq data={FAQ_DATA} color={'#fff'} />
    </>
  );
};

export default PricingPage;
