'use client';
import React, { useState, useEffect } from 'react';
import BlogCards from '@/components/homepage/BlogCards';
import Hero from '@/components/homepage/Hero';
import { BLOGS_HERO_DATA } from '@/constants/global/hero-sections';
import { getBlog } from '@/sanity/sanity.quries';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBlogs = await getBlog();
        if (Array.isArray(fetchedBlogs)) {
          setBlogs(fetchedBlogs);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        setError(error.message || 'An error occurred while fetching blog data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero data={BLOGS_HERO_DATA} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <BlogCards data={blogs} />}
    </>
  );
}
