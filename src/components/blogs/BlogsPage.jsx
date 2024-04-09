'use client';
import { useState, useEffect } from 'react';
import { BLOGS_HERO_DATA } from '@/constants/global/hero-sections';
import { getBlog } from '@/sanity/sanity.quries';
import Hero from '@/components/homepage/Hero';
import BlogCards from '../homepage/BlogCards';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const fetchedJob = await getBlog();
      setBlogs(fetchedJob);
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
        console.error('Error refreshing Blogs:', error);
      }
    }, 600000);
    return () => clearInterval(interval);
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <>
      <Hero data={BLOGS_HERO_DATA} />
      <BlogCards data={blogs} />
    </>
  );
}
