import CareerCards from '@/components/careers/CareerCards';
import Hero from '@/components/homepage/Hero';
import { JOBS_HERO_DATA } from '@/constants/global/hero-sections';
import { getJob, getJobCategories } from '@/sanity/sanity.quries';

export default async function page() {
  try {
    const job = await getJob();
    const jobCategory = await getJobCategories();

    return (
      <>
        <Hero data={JOBS_HERO_DATA} />
        <CareerCards data={job} categories={jobCategory} />
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <p>Error loading data. Please try again later.</p>;
  }
}
