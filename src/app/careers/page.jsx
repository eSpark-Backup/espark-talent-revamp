import CareerCards from '@/components/careers/CareerCards';
import Hero from '@/components/homepage/Hero';
import { JOBS_HERO_DATA } from '@/constants/global/hero-sections';
import { getJob, getJobCategories } from '@/sanity/sanity.quries';

export default async function page() {
  const job = await getJob();
  const jobCategory = await getJobCategories();

  setTimeout(async () => {
    const job = await getJob();
    const jobCategory = await getJobCategories();
    console.log(job, jobCategory);
  }, 60000);

  return (
    <>
      <Hero data={JOBS_HERO_DATA} />
      <CareerCards data={job} categories={jobCategory} />
    </>
  );
}
