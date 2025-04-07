import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ReadMoreButton } from './ReadMoreButton';

export const BlogCard = ({ item }) => (
  <Box
    className="single-blog-post"
    sx={{ px: { xs: '5%', sm: '5%', md: '2%', lg: '2%' }, pb: '30px' }}
  >
    <Link href={`/blogs/${item?.slug}`}>
      <Box className="image" sx={{ display: 'flex' }}>
        <span style={{ marginRight: '18px' }}>
          {item?.featureImage && (
            <Image
              quality="85"
              priority
              src={item?.featureImage}
              alt={item?.title}
              width={900}
              height={900}
              style={{ borderRadius: '15px' }}
            />
          )}
        </span>
        {item?.publishedAt && (
          <Typography
            component={'span'}
            className="date"
            sx={{
              fontSize: { xs: '13px', sm: '14px', md: '15px', lg: '16px' },
            }}
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
    <Box sx={{ width: '90%', my: 2 }}>
      <Box
        sx={{
          width: '100%',
          minHeight: { xs: 'auto', lg: '210px' },
          maxHeight: { xs: 'auto', lg: '210px' },
        }}
      >
        <Link href={`/blogs/${item?.slug}`}>
          <Typography
            sx={{
              color: '#09114A',
              fontSize: { xs: '18px', md: '20px', lg: '23.49px' },
              fontWeight: 600,
            }}
          >
            {item?.title}
          </Typography>
        </Link>
        <Typography
          sx={{
            color: '#6F76A8',
            fontSize: { xs: '13px', md: '14.46px' },
            fontWeight: 400,
            my: 2,
          }}
        >
          {item?.subtitle}
        </Typography>
      </Box>
      <ReadMoreButton slug={item?.slug} />
    </Box>
  </Box>
);
