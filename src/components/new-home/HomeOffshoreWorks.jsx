'use client';
import React from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const HomeOffshoreWorks = ({ data }) => {
  const pathName = usePathname();
  const hire_remote_developers = pathName === '/hire-remote-developers';
  // const [selectedItem, setSelectedItem] = useState(data?.items[0]);
  return (
    <>
      <Box
        sx={{
          backgroundColor: hire_remote_developers ? '#fff' : '#F7F8FB',
          py: 3,
        }}
      >
        <Container sx={{ p: 1 }}>
          <Box sx={{ pb: { xs: '20px', md: '25px', lg: '30px' } }}>
            <Typography
              variant={'h2'}
              color={'secondary'}
              sx={{
                textAlign: 'center',
                flexWrap: 'wrap',
                fontSize: { xs: '22px', sm: '25px', md: '28px', lg: '32px' },
              }}
            >
              {data?.title}
            </Typography>
          </Box>
          <Grid container sx={{ py: 2, px: 2 }}>
            {data?.items?.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: `url(${item?.invert ? data?.bgImageInvert : data?.bgImage})`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '100%',
                  p: 2,
                }}
              >
                {!item?.invert && (
                  <Image
                    quality="85"
                    priority={true}
                    src={item?.icon}
                    width={100}
                    height={100}
                    alt={`Experties Icon`}
                    style={{ zIndex: '99999' }}
                  />
                )}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    height: '200px',
                    boxShadow: '0 4px 4px 0 rgba(0,0,0,.25)',
                    borderRadius: '25px',
                    gap: '7px',
                    mt: !item?.invert && '-30px',
                    mb: item?.invert && '-30px',
                    px: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#001C63',
                      fontSize: '28.71px',
                      lineHeight: '26px',
                      fontWeight: 700,
                      textAlign: 'center',
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <Divider
                    variant="middle"
                    sx={{
                      width: '80%',
                      color: '#f00',
                    }}
                  />
                  <Typography
                    sx={{
                      color: '#001C63',
                      fontSize: '16px',
                      lineHeight: '26px',
                      fontWeight: 500,
                      textAlign: 'center',
                      px: 4,
                    }}
                  >
                    {item?.description}
                  </Typography>
                </Box>
                {item?.invert && (
                  <Image
                    quality="85"
                    priority={true}
                    src={item?.icon}
                    width={100}
                    height={100}
                    alt={`Experties Icon`}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomeOffshoreWorks;
