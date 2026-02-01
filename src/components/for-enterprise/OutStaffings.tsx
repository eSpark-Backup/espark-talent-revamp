'use client';
import React from 'react';

import Image from 'next/image';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import Link from 'next/link';
import {
  containerStyle,
  headingBoxStyle,
  headingTypographyStyle,
  descriptionTypographyStyle,
  gridContainerStyle,
  itemBoxStyle,
  itemTitleTypographyStyle,
  itemParagraphTypographyStyle,
  buttonContainerStyle,
  buttonStyle,
} from '@/constants/solutions/for-enterprise/OutStaffingsConstant';

const OutStaffings = ({ data }) => {
  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }

  return (
    <>
      <Box sx={containerStyle}>
        <Container>
          <Box sx={headingBoxStyle}>
            <Typography color={'secondary'} sx={headingTypographyStyle}>
              {data?.heading || 'Heading not available'}
            </Typography>
            <Typography
              color={'secondary'}
              sx={descriptionTypographyStyle}
              dangerouslySetInnerHTML={{
                __html: data?.description || 'Description not available',
              }}
            />
          </Box>
          <Grid container sx={gridContainerStyle}>
            {data?.items?.length > 0 ? (
              data?.items.map((list, itemIndex) => (
                <Grid item xs={12} sm={5.5} key={itemIndex}>
                  <Box sx={itemBoxStyle}>
                    {list?.listIcon && (
                      <Image
                        quality="85"
                        priority={true}
                        src={list.listIcon}
                        alt={list?.title || 'List Icon'}
                        width={24}
                        height={24}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/path/to/fallback/image.jpg';
                        }}
                      />
                    )}
                    <Typography sx={itemTitleTypographyStyle} color="secondary">
                      {list?.title || 'Title not available'}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={itemParagraphTypographyStyle}
                      dangerouslySetInnerHTML={{
                        __html: list?.paragraph || 'Paragraph not available',
                      }}
                    />
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography>No items available</Typography>
            )}
          </Grid>
          <Grid item xs={12} sx={buttonContainerStyle}>
            {data?.buttonLink && data?.buttonText ? (
              <Link href={data?.buttonLink} target="_blank" passHref>
                <Button sx={buttonStyle}>{data?.buttonText}</Button>
              </Link>
            ) : (
              <Typography>Button not available</Typography>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OutStaffings;
