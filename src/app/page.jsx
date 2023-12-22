import Faq from '@/components/FAQ/Faq';
import AchievementAwards from '@/components/homepage/achievementAwards';
import HeroSection from '@/components/homepage/heroSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AchievementAwards />
      <Faq />
    </>
  );
};
export default Home;
