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
          <Grid item sm={12} md={7} sx={{ px: { md: '20px' } }}>
            <Box sx={{ mt: { lg: '20px' } }}>
              <Box>
                <Typography
                  sx={{
                    color: '#001C63',
                    fontSize: { md: '32px', xs: '20px' },
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: { md: '56px', xs: '29px' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  {heading}
                </Typography>
                <Typography
                  sx={{
                    py: { xs: 1, md: 3 },
                    px: { xs: '10px', md: '0px' },
                    // pr: {lg:'60px'},
                    color: '#001C63',
                    textAlign: { xs: 'center', md: 'left' },
                    fontSize: { xs: '10px', sm: '12px', md: '16.517px' },
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: { xs: '22.9px', lg: '22.896px', md: '25px' },
                  }}
                >
                  {subHeading}
                </Typography>
              </Box>
              <Grid container>
                {list?.map((item, index) => (
                  <Grid item xs={12} md={12} lg={6} key={index}>
                    <Box
                      sx={{ display: 'flex', pl: { xs: '18px', md: '0px' } }}
                    >
                      <Box>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                          <TaskAltIcon
                            fontSize="small"
                            sx={{
                              color: '#029894',
                              fontSize: { md: '17px', xs: '17px' },
                            }}
                          />
                        </ListItemIcon>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: '#001C63',
                            fontSize: {
                              xs: '11.704px',
                              sm: '12px',
                              md: '16.517px',
                            },
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: { md: '24px' },
                            mb: { lg: '2px' },
                            mt: { xs: '6px', md: '0px' },
                          }}
                        >
                          {item?.content}
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
            md={5}
            sx={{
              display: 'flex',
              margin: '0px auto !important',
              pt: { xs: '40px', md: '0px' },
            }}
          >
            <Box
              sx={{
                backgroundColor: '#3B59980A',
                borderRadius: '17.311px',
                width: ' 100%',
                display: 'flex',
                justifyContent: { xs: 'center', md: 'center' },
                alignItems: 'center',
                alignContent: 'center',
                margin: '0px auto !important',
                px: 2,
              }}
            >
              <Image src={image} width={420} height={25} alt={alt} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChooseUs;
