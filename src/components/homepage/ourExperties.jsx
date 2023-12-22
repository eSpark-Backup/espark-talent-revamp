'use client';
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box, Typography, Button, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import Image  from 'next/image';

import { EXPERTIES_DATA } from '@/constants/home-page/our-experties';

const OurExperties = () => {
  return (
    <Box sx={{ background: '#F7F8FB', py: '2.5%' }}>
      <Container sx={{ px: '5%' }}>
        <Box sx={{ pb: '30px' }}>
          <Typography
            variant="h2"
            color="secondary"
            sx={{ textAlign: 'center' }}
          >
            {EXPERTIES_DATA?.title}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={1} />
          {EXPERTIES_DATA?.sections.map((section, index) => (
            <Grid key={index} item xs={2.5}>
              {section.lists.map((list, listIndex) => (
                <Box item key={listIndex}>
                  <Typography
                    variant="h5"
                    sx={{ py: '10px', color: 'secondary' }}
                  >
                    {list.heading}
                  </Typography>
                  <Box>
                    {list.listItems.map((item, itemIndex) => (
                      <ListItem key={itemIndex}>
                        <ListItemIcon>
                          <Image
                            src={EXPERTIES_DATA?.icon}
                            alt="List Icon"
                            width={15}
                            height={15}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            variant=""
                            sx={{ py: '10px', color: '#001C63' }}
                          >
                            {item.title}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </Box>
                </Box>
              ))}
            </Grid>
          ))}
          <Grid item xs={1} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            href={EXPERTIES_DATA?.buttonLink}
          >
            {EXPERTIES_DATA?.buttonText}
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurExperties;
