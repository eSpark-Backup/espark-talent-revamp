'use client';
import React from 'react';

import Image from 'next/image';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import Link from 'next/link';
import {
  containerSx,
  headingBoxSx,
  headingTypographySx,
  descriptionTypographySx,
  gridContainerSx,
  itemBoxSx,
  itemTitleTypographySx,
  itemParagraphTypographySx,
  buttonContainerSx,
  buttonSx,
} from './OutStaffingsConstant';

const OutStaffings = ({ data }) => {
  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }

  return (
    <>
      <Box sx={containerSx}>
        <Container>
          <Box sx={headingBoxSx}>
            <Typography color={'secondary'} sx={headingTypographySx}>
              {data?.heading || 'Heading not available'}
            </Typography>
            <Typography color={'secondary'} sx={descriptionTypographySx}>
              {data?.description || 'Description not available'}
            </Typography>
          </Box>
          <Grid container sx={gridContainerSx}>
            {data?.items?.length > 0 ? (
              data?.items.map((list, itemIndex) => (
                <Grid item xs={12} sm={5.5} key={itemIndex}>
                  <Box sx={itemBoxSx}>
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
                    <Typography sx={itemTitleTypographySx} color="secondary">
                      {list?.title || 'Title not available'}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={itemParagraphTypographySx}>
                      {list?.paragraph || 'Paragraph not available'}
                    </Typography>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography>No items available</Typography>
            )}
          </Grid>
          <Box item xs={12} sx={buttonContainerSx}>
            {data?.buttonLink && data?.buttonText ? (
              <Link href={data?.buttonLink} target="_blank" passHref>
                <Button sx={buttonSx}>{data?.buttonText}</Button>
              </Link>
            ) : (
              <Typography>Button not available</Typography>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OutStaffings;
