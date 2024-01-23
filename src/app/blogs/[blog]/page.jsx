import React from 'react';
import { Container, Box } from '@mui/material';
import { getAuthor, getSingleBlog } from '@/sanity/sanity.quries';
import NotFound from '@/app/not-found';
import { BLOGS_NOT_FOUND_DATA } from '@/constants/global/notfound';

const Page = async ({ params }) => {
  if (!params || !params.blog) {
    return (
      <div>
        <NotFound data={BLOGS_NOT_FOUND_DATA} />
      </div>
    );
  }

  const slug = params.blog;

  if (typeof slug !== 'string' || slug.trim() === '') {
    return (
      <div>
        <NotFound data={BLOGS_NOT_FOUND_DATA} />
      </div>
    );
  }

  try {
    const author = await getAuthor();
    const blog = await getSingleBlog(slug);

    if (!blog || typeof blog !== 'object') {
      return (
        <div>
          <NotFound data={BLOGS_NOT_FOUND_DATA} />
        </div>
      );
    }

    const BlogDetailsContent = React.lazy(
      () => import('@/components/blogs/blogDetailsContent')
    );
    const SingleBlogHeader = React.lazy(
      () => import('@/components/blogs/SingleBlogHeader')
    );

    return (
      <>
        <Box
          sx={{
            background:
              'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(191,249,253,1) 0%, rgba(255,255,255,1) 100%)',
          }}
        >
          <Container>
            <SingleBlogHeader data={blog} authors={author} />
            <BlogDetailsContent data={blog} />
          </Container>
        </Box>
      </>
    );
  } catch (error) {
    // Handle errors that may occur during data fetching
    console.error('Error fetching blog data:', error);
    return (
      <div>
        <NotFound data={BLOGS_NOT_FOUND_DATA} />
      </div>
    );
  }
};

export default Page;
