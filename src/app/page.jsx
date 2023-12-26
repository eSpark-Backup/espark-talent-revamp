import AchievementAwards from '@/components/homepage/achievementAwards';
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
      <OurPerks />
    </>
  );
};
export default Home;
