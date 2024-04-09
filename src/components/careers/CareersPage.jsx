'use client';
import { useState, useEffect } from 'react';
import { JOBS_HERO_DATA } from '@/constants/global/hero-sections';
import { getJob } from '@/sanity/sanity.quries';
import CareerCards from '@/components/careers/CareerCards';
import Hero from '@/components/homepage/Hero';

// Assuming this is a Next.js page component
export default function CareersPage() {
  const [job, setJob] = useState(null);
  const [error, setError] = useState('');

  // Function to fetch jobs and job categories
  const fetchData = async () => {
    try {
      const fetchedJob = await getJob();
      setJob(fetchedJob);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error loading data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(async () => {
      try {
        fetchData();
      } catch (error) {
        console.error('Error refreshing Jobs:', error);
      }
    }, 600000);
    return () => clearInterval(interval);
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <>
      <Hero data={JOBS_HERO_DATA} />
      <CareerCards data={job} />
    </>
  );
}
