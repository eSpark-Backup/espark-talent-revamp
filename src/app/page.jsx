import AchievementAwards from '@/components/homepage/achievementAwards';
import ClientSlider from '@/components/global/clientSlider';
import HeroSection from '@/components/homepage/heroSection';
import OurExperties from '@/components/homepage/ourExperties';
import OurPerks from '@/components/homepage/ourPerks';
import OurProcess from '@/components/homepage/ourProcess';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AchievementAwards />
      <OurExperties />
      <OurProcess />
      <ClientSlider
        bgColor={'#029894'}
        txtColor={'#ffffff'}
        title={'Meet our partners who trust our certified tech experts'}
      />
      <OurPerks />
    </>
  );
};
export default Home;
