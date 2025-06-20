import React from 'react';
import { Container, Box } from '@mui/material';
import { getAuthor, getSingleBlog } from '@/sanity/sanity.quries';
import { GLOBAL_SEO } from '@/constants/seo/seo-data';
import { BLOGS_NOT_FOUND_DATA } from '@/constants/global/not-found';
import NotFoundPage from '@/components/global/NotFound';
import { getBlogsMetadata } from '@/components/global/Seo';
import StructuredData from '@/components/global/StructuredData';

export const generateMetadata = async ({ params }) => {
  const slug = params.blog;
  const blog = await getSingleBlog(slug);
  const filteredData = blog || GLOBAL_SEO[0];
  return getBlogsMetadata(filteredData);
};

const Page = async ({ params }) => {
  if (!params || !params.blog) {
    return (
      <div>
        <NotFoundPage data={BLOGS_NOT_FOUND_DATA} />
      </div>
    );
  }
  try {
    const slug = params?.blog;
    const author = await getAuthor();
    const blog = await getSingleBlog(slug);

    const BlogDetailsContent = React.lazy(
      () => import('@/components/blogs/BlogDetailsContent')
    );
    const SingleBlogHeader = React.lazy(
      () => import('@/components/blogs/SingleBlogHeader')
    );
    if (!blog) {
      return <NotFoundPage data={BLOGS_NOT_FOUND_DATA} />;
    }
    return (
      <>
        <StructuredData data={blog?.jsonLd} />
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
    console.error('Error fetching data:', error);
    return (
      <div>
        <NotFoundPage data={BLOGS_NOT_FOUND_DATA} />
      </div>
    );
  }
};

export default Page;
