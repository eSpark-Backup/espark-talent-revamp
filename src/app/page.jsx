import AchievementAwards from '@/components/homepage/achievementAwards';
import HeroSection from '@/components/homepage/heroSection';
import OurExperties from '@/components/homepage/ourExperties';
import OurProcess from '@/components/homepage/ourProcess';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AchievementAwards />
      <OurExperties />
      <OurProcess />
    </>
  );
};
export default Home;
