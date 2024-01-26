import React from 'react';
import { Container, Box } from '@mui/material';
import { getAuthor, getSingleBlog } from '@/sanity/sanity.quries';

const Page = async ({ params }) => {
  const slug = params?.blog;
  const author = await getAuthor();
  const blog = await getSingleBlog(slug);

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
};

export default Page;
