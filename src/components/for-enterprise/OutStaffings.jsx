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
  return (
    <>
      <Box sx={containerSx}>
        <Container>
          <Box sx={headingBoxSx}>
            <Typography color={'secondary'} sx={headingTypographySx}>
              {data?.heading}
            </Typography>
            <Typography color={'secondary'} sx={descriptionTypographySx}>
              {data?.description}
            </Typography>
          </Box>
          <Grid container sx={gridContainerSx}>
            {data?.items?.map((list, itemIndex) => (
              <Grid item xs={12} sm={5.5} key={itemIndex}>
                <Box sx={itemBoxSx}>
                  <Image
                    quality="85"
                    priority={true}
                    src={list?.listIcon}
                    alt="List Icon"
                    width={24}
                    height={24}
                  />
                  <Typography sx={itemTitleTypographySx} color="secondary">
                    {list?.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" sx={itemParagraphTypographySx}>
                    {list?.paragraph}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box item xs={12} sx={buttonContainerSx}>
            <Link href={data?.buttonLink} target="_blank">
              <Button sx={buttonSx}>{data?.buttonText}</Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OutStaffings;
