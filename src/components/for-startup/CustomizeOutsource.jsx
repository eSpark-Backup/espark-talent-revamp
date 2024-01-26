'use client';
import React from 'react';
import { Box, Grid, ListItemIcon, Typography, Container } from '@mui/material';
import Image from 'next/image';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const CustomizeOutsource = ({ data }) => {
  const { listItem } = data;
  return (
    <Box sx={{ my: 2 }}>
      <Container>
        <Grid container display={'flex'} alignItems={'center'}>
          <Grid item sm={12} md={6}>
            <Box>
              <Box>
                <Typography
                  sx={{
                    color: '#001C63',
                    fontSize: { xs: '20px', md: '28px' },
                    lineHeight: { xs: '31px', md: '41.547px' },
                    fontWeight: 500,
                    mb: { xs: '5px', lg: '20px' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  {data?.title}
                </Typography>
              </Box>
            </Box>
            {listItem?.map((item, index) => (
              <Grid item sm={12} md={10} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    textAlign: 'baseline',
                    mx: { sm: '20%', md: '0%' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: { xs: '28px', md: '30px' } }}>
                    <TaskAltIcon
                      fontSize="small"
                      sx={{
                        color: '#029894',
                        fontSize: { xs: '15px', md: '22px' },
                      }}
                    />
                  </ListItemIcon>
                  <Typography
                    sx={{
                      mb: 2,
                      color: '#001C63',
                      fontSize: { xs: '13px', md: '14px' },
                      lineHeight: { xs: '13.729px', md: '23.741px' },
                      textAlign: 'justify',
                      fontWeight: 600,
                    }}
                  >
                    {item?.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                borderRadius: '17.311px',
                backgroundColor: '#3B59980A',
                mt: { xs: 1, md: 2 },
                pt: 1,
                py: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                src={data?.image}
                width={380}
                height={300}
                alt={`${data?.alt} -eSpark Talent`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomizeOutsource;
