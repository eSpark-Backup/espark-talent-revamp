'use client';
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation';

const BlogSEO = ({ data }) => {
  const pathname = usePathname();

  const metaData = data.filter((item) => item.path == pathname);

  console.log(metaData[0], 'metaData');
  return (
    <>
      <NextSeo
        title={metaData[0]?.title}
        description={metaData[0]?.description}
        canonical={`https://www.esparktalent.com${metaData[0]?.path}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: `${metaData[0]?.date}`,
            modifiedTime: `${metaData[0]?.date}`,
            tags: [
              `${metaData[0]?.tags1}`,
              `${metaData[0]?.tags2}`,
              `${metaData[0]?.tags3}`,
            ],
          },
          url: `${metaData[0]?.date}`,
          images: {
            url: `${metaData[0]?.image}`,
            width: 850,
            height: 650,
            alt: `${metaData[0]?.title}`,
          },
          site_name: 'eSpark Talent',
        }}
      />
    </>
  );
};

export default BlogSEO;
