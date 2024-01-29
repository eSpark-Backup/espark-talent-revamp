import React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const FooterCTA = ({ data }) => {
  const pathName = usePathname();
  const is600Screen = useMediaQuery('(max-width:600px)');
  const is425Screen = useMediaQuery('(max-width:425px)');
  const is375Screen = useMediaQuery('(max-width:375px)');

  return (
    <>
      {' '}
      {pathName !== '/book-a-demo' &&
        pathName !== '/careers' &&
        pathName !== '/partnership-program' && (
          <Box
            sx={{
              backgroundColor: '#029894',
              backgroundImage: [
                '',
                '',
                `url(/images/footer-cta-main-bg.png)`,
                `url(/images/footer-cta-main-bg.png)`,
              ],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Container>
              <Grid
                container
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Grid
                  item
                  lg={8.5}
                  md={8.5}
                  sm={7}
                  xs={7}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: { lg: '1%', md: '1%', sm: '5%', xs: '5%' },
                  }}
                >
                  <Box>
                    <Typography
                      // variant="h1"
                      sx={{
                        color: '#ECECED',
                        fontSize: {
                          lg: '50px',
                          md: '32px',
                          sm: '20px',
                          xs: '14px',
                        },
                        lineHeight: 1.3,
                        fontWeight: 700,
                        py: { lg: '1%', md: '1%', sm: '0', xs: '0' },
                        pb: { lg: '1%', md: '1%', sm: '2.5%', xs: '2.5%' },
                      }}
                    >
                      {data?.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#ECECED',
                        fontSize: {
                          lg: '24px',
                          md: '20px',
                          sm: '10px',
                          xs: '10px',
                        },
                        lineHeight: 1.3,
                        fontWeight: 400,
                        py: { lg: '1%', md: '1%', sm: '0', xs: '0' },
                        pb: { lg: '1%', md: '1%', sm: '2.5%', xs: '2.5%' },
                      }}
                    >
                      {data?.description}
                    </Typography>
                    <Link href={data?.buttonLink} target="_blank">
                      <Button
                        sx={{
                          py: { xs: '7px', sm: '8px', md: '10px', lg: '10px' },
                          px: {
                            xs: '10px',
                            sm: '10px',
                            md: '12px',
                            lg: '15px',
                          },
                          backgroundColor: '#fff',
                          '&:hover': {
                            backgroundColor: '#fff',
                          },
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 'bold',
                            fontSize: {
                              xs: '8px',
                              sm: '10px',
                              md: '14px',
                              lg: '17px',
                            },
                            color: '#09114A',
                          }}
                        >
                          {data?.buttonLabel}
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={3.5}
                  md={3.5}
                  sm={5}
                  xs={5}
                  sx={{ textAlign: is600Screen ? 'center' : 'start' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'start',
                    }}
                  >
                    <Image
                      quality="85"
                      proprity={true}
                      src={data?.image}
                      width={is600Screen ? 300 : 360}
                      height={is600Screen ? 290 : 350}
                      alt="images"
                      className="footerCta"
                      style={{
                        // position: 'absolute',
                        bottom: 0,
                        marginTop: is375Screen
                          ? `-25px`
                          : is425Screen
                            ? `-30px`
                            : `-60px`,
                        zIndex: 1000,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        )}
    </>
  );
};

export default FooterCTA;
