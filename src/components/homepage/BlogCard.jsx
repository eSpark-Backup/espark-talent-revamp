import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ReadMoreButton } from '@/components/homepage/ReadMoreButton';
import {
  blogCardStylescontainer,
  blogCardStylesimageContainer,
  blogCardStylesdate,
  blogCardStylescontentContainer,
  blogCardStylestextContainer,
  blogCardStylestitle,
  blogCardStylessubtitle,
} from '@/components/homepage/BlogCardStyles';

export const BlogCard = ({ item }) => (
  <Box className="single-blog-post" sx={blogCardStylescontainer}>
    <Link href={`/blogs/${item?.slug}`}>
      <Box className="image" sx={blogCardStylesimageContainer}>
        <span style={{ marginRight: '18px' }}>
          {item?.featureImage && (
            <Image
              quality="85"
              priority
              src={item?.featureImage}
              alt={item?.title}
              width={900}
              height={900}
              // style={{ borderRadius: '15px' }}
            />
          )}
        </span>
        {item?.publishedAt && (
          <Typography
            component={'span'}
            className="date"
            sx={blogCardStylesdate}
          >
            {Intl?.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            })?.format(new Date(item?.publishedAt))}
          </Typography>
        )}
      </Box>
    </Link>
    <Box sx={blogCardStylescontentContainer}>
      <Box sx={blogCardStylestextContainer}>
        <Link href={`/blogs/${item?.slug}`}>
          <Typography sx={blogCardStylestitle}>{item?.title}</Typography>
        </Link>
        <Typography sx={blogCardStylessubtitle}>{item?.subtitle}</Typography>
      </Box>
      <ReadMoreButton slug={item?.slug} />
    </Box>
  </Box>
);
