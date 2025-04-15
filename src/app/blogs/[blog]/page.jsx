import React from 'react';
import PropTypes from 'prop-types';
import NotFoundPage from '@/components/global/NotFound';

import { Container, Box } from '@mui/material';
import { BLOGS_NOT_FOUND_DATA } from '@/constants/global/notfound';
import { singleBlogBgStyle } from '@/components/blogs/singleBlogPageStyles';
import { getAuthor, getSingleBlog } from '@/sanity/sanity.quries';
import { fetchBlogMetadata } from '@/utils/cors';

/**
 * Generates metadata for the given blog page.
 *
 * @async
 * @function generateMetadata
 * @param {Object} context - The context object containing route parameters.
 * @param {Object} context.params - The route parameters.
 * @param {string} context.params.blog - The slug representing the blog page.
 * @returns {Promise<Object>} A promise that resolves to the metadata for the blog page.
 */
export async function generateMetadata({ params }) {
  const slug = params?.blog;
  return fetchBlogMetadata(slug);
}

const Page = async ({ params }) => {
  if (!params || !params?.blog) {
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

    const BlogDetailsContent = React?.lazy(
      () => import('@/components/blogs/blogDetailsContent')
    );
    const SingleBlogHeader = React?.lazy(
      () => import('@/components/blogs/SingleBlogHeader')
    );
    if (!blog) {
      return <NotFoundPage data={BLOGS_NOT_FOUND_DATA} />;
    }
    return (
      <>
        <Box sx={singleBlogBgStyle}>
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

Page.propTypes = {
  params: PropTypes?.object?.isRequired,
};

export default Page;
