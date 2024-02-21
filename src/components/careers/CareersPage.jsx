'use client';
import { useState, useEffect } from 'react';
import CareerCards from '@/components/careers/CareerCards';
import Hero from '@/components/homepage/Hero';
import { JOBS_HERO_DATA } from '@/constants/global/hero-sections';
import { getJob, getJobCategories } from '@/sanity/sanity.quries';

// Assuming this is a Next.js page component
export default function CareersPage() {
  const [job, setJob] = useState(null);
  const [jobCategory, setJobCategory] = useState(null);
  const [error, setError] = useState('');

  // Function to fetch jobs and job categories
  const fetchData = async () => {
    try {
      const fetchedJob = await getJob();
      const fetchedJobCategory = await getJobCategories();
      setJob(fetchedJob);
      setJobCategory(fetchedJobCategory);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error loading data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(async () => {
      try {
        const refreshedJobCategories = await getJobCategories();
        setJobCategory(refreshedJobCategories);
      } catch (error) {
        console.error('Error refreshing job categories:', error);
      }
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <>
      <Hero data={JOBS_HERO_DATA} />
      {job && jobCategory ? (
        <CareerCards data={job} categories={jobCategory} />
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
