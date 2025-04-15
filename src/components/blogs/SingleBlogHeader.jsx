'use client';

import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import moment from 'moment';
import {
  containerStyles,
  titleStyles,
  subtitleStyles,
  postAuthorMetaStyles,
  avatarStyles,
  authorNameStyles,
  imageContainerStyles,
  imageStyles,
  avatarBoxStyles,
} from '@/components/blogs/SingleBlogHeaderStyles';

const SingleBlogHeader = ({ data, authors }) => {
  const blogString = JSON?.stringify(data);
  const parsedblog = JSON?.parse(blogString);
  const filteredAuthor = authors?.filter(
    (author) => author?._id === parsedblog?.author
  )[0];
  return (
    <>
      <Box sx={containerStyles}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} order={{ xs: 1, sm: 1, md: 1 }}>
            <Box pb={{ xs: '5%', md: '10%' }}>
              <Typography variant="h1" sx={titleStyles}>
                {parsedblog?.title}
              </Typography>
              <Typography variant="body1" sx={subtitleStyles}>
                {parsedblog?.subtitle}
              </Typography>
            </Box>
            <Box className="post-author-meta" sx={postAuthorMetaStyles}>
              <Box sx={avatarBoxStyles}>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt={parsedblog?.title}
                    src={filteredAuthor?.avatar || `/images/author.jpg`}
                    sx={avatarStyles}
                  />
                </Stack>
                <Box className="title">
                  <Box display="flex" gap="2px">
                    <Typography variant="body1" color={'black'}>
                      By
                      <Typography
                        component={'span'}
                        variant="body1"
                        sx={authorNameStyles}
                      >
                        {`${filteredAuthor?.firstName ? filteredAuthor?.firstName : 'eSpark'} ${filteredAuthor?.lastName ? filteredAuthor?.lastName : 'Talent'}`}
                      </Typography>
                    </Typography>
                  </Box>
                  <Typography variant="body1" color={'black'}>
                    {moment(parsedblog?.publishedAt)?.format('MMMM DD, YYYY')}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} order={{ xs: 1, sm: 1, md: 2 }}>
            <Box className="image" sx={imageContainerStyles}>
              <Image
                quality="85"
                priority={true}
                src={parsedblog?.bannerImage}
                alt={`${parsedblog?.imageAlt}`}
                width={860}
                height={570}
                style={imageStyles}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SingleBlogHeader;
