import AwardAchievement from '@/components/homepage/AwardAchiefment';
import { ACHIEVEMENTS_DATA } from '@/constants/new-home/homepage';
import { FAQ_DATA } from '@/constants/home-page/faq-section';
import ServiceFaq from '@/components/service/ServiceFaq';

const HomeBottom = () => {
  return (
    <>
      <AwardAchievement
        data={ACHIEVEMENTS_DATA}
        design={1}
        background={'#F7F8FB'}
      />
      <ServiceFaq data={FAQ_DATA} color={'#fff'} />
    </>
  );
};

export default HomeBottom;
