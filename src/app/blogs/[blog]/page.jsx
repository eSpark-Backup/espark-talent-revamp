import React from 'react';
import PropTypes from 'prop-types';
import { Container, Box } from '@mui/material';
import { getAuthor, getSingleBlog } from '@/sanity/sanity.quries';
import { BLOGS_SEO, GLOBAL_SEO } from '@/constants/test';
import { BLOGS_NOT_FOUND_DATA } from '@/constants/global/notfound';
import NotFoundPage from '@/components/global/NotFound';

export async function generateMetadata({ params }) {
  // read route params
  const slug = params.blog;

  const filteredData =
    BLOGS_SEO.find((item) => item.path === slug) || GLOBAL_SEO[0];
  const metadata = {
    metadataBase: new URL('https://esparktalent.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    keywords: [`eSpark Talent`, `eSpark Solution`, `eSpark Consultants`],
    author: `eSpark Talent`,
    canonical: `https://esparktalent.com/blogs/${filteredData?.path}`,
    robots: `index, follow`,
    openGraph: {
      metadataBase: new URL('https://esparktalent.com/'),
      title: filteredData?.title,
      description: filteredData?.description,
      type: 'article',
      publishedTime: '2023-01-01T00:00:00.000Z',
      authors: ['eSpark Talent', 'Mehdi Raza'],
      siteName: `eSpark Talent: Get Modern Employee Outsourcing Solutions.`,
      locale: `en_US`,
      images: [
        {
          url: filteredData?.image,
          alt: filteredData?.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: `summary_large_image`,
      metadataBase: new URL('https://esparktalent.com/'),
      title: filteredData?.title,
      description: filteredData?.description,
      siteId: `@eSparkTalent`,
      creator: `@eSparkTalent`,
      images: [`${filteredData?.image}`],
    },
  };

  return metadata;
}

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
      () => import('@/components/blogs/blogDetailsContent')
    );
    const SingleBlogHeader = React.lazy(
      () => import('@/components/blogs/SingleBlogHeader')
    );
    if (!blog) {
      return <NotFoundPage data={BLOGS_NOT_FOUND_DATA} />;
    }
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
    console.error('Error fetching data:', error);
    return (
      <div>
        <NotFoundPage data={BLOGS_NOT_FOUND_DATA} />
      </div>
    );
  }
};

Page.propTypes = {
  params: PropTypes.object.isRequired,
};

export default Page;
