import React, { useEffect, useState } from 'react';
import { getBlog } from '@/sanity/sanity.quries';
import BlogCards from '../homepage/BlogCards';

export default function SSRBlogs() {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogData = await getBlog();
        setBlog(blogData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <p>Error loading data. Please try again later.</p>
      ) : (
        <BlogCards data={blog?.slice(0, 3)} smCol={2} />
      )}
    </>
  );
}
