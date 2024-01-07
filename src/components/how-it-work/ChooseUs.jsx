import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, ListItemIcon, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const ChooseUs = ({ chooseUs }) => {
  const { list, image, alt, heading, subHeading } = chooseUs;
  return (
    <Box sx={{ mb: '4%' }}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={8} sx={{ px: '20px' }}>
            <Box sx={{ mt: { lg: '40px' } }}>
              <Box>
                <Typography
                  sx={{
                    width: { md: '70%' },
                    color: '#001C63',
                    fontSize: { md: '32px', xs: '20px' },
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: { xs: 700, sm: 600 },
                    lineHeight: { md: '42.289px', xs: '27px' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  {heading}
                </Typography>
                <Typography
                  sx={{
                    py: 3,
                    color: '#001C63',
                    fontFamily: 'Poppins',
                    fontSize: '16.517px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: { lg: '22.896px', md: '25px' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  {subHeading}
                </Typography>
              </Box>
              <Grid container>
                {list?.map((item, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box sx={{ display: 'flex' }}>
                      <Box>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                          <TaskAltIcon
                            fontSize="small"
                            sx={{ color: '#029894', fontSize: '17px' }}
                          />
                        </ListItemIcon>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: '#001C63',
                            fontFamily: 'Poppins',
                            fontSize: '16.517px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: { md: '24px' },
                            pt: { xs: '2px' },
                            mb: { lg: '20px' },
                          }}
                        >
                          {item.content}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            sx={{
              margin: '0px auto !important',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#3B59980A',
                borderRadius: '17.311px',
                display: 'flex',
                justifyContent: { xs: 'center', md: 'left' },
                margin: '0px auto !important',
                py: 2,
                px: 2,
              }}
            >
              <Image src={image} width={400} height={25} alt={alt} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChooseUs;
