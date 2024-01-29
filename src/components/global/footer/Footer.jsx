'use client';
import React from 'react';
import { Box, Divider, Typography, Grid } from '@mui/material';
import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import FooterTitle from './FooterTitle';
import FooterItem from './FooterItem';
import Rights from './Rights';
import { usePathname } from 'next/navigation';
import { ImageLoader } from '../imageloader';

const Footer = ({ data }) => {
  const pathName = usePathname();
  return (
    <>
      {pathName !== '/book-a-demo' && (
        <>
          <Box
            sx={{
              background: '#ECECED',
              pt: 4,
            }}
          >
            <Container>
              <Grid container>
                <Grid item lg={5} md={5} sm={12} xs={12}>
                  <Image
                    quality="85"
                    proprity={true}
                    src={data?.logo}
                    width={120}
                    height={59}
                    alt={`${data?.alt} -eSpark Talent`}
                    style={{ marginBottom: '10px' }}
                  />
                  <Typography
                    sx={{
                      color: '#001C63',
                      textAlign: 'justify',
                      fontSize: {
                        xs: '10px',
                        sm: '10px',
                        md: '13px',
                        lg: '15px',
                      },
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '24.319px',
                      pr: {
                        lg: '30%',
                        md: '20%',
                        sm: '10%',
                      },
                    }}
                  >
                    {data?.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '140px',
                      my: '10px',
                      mx: '6px',
                      mb: {
                        xs: '40px',
                        lg: '0px',
                      },
                    }}
                  >
                    {data?.socialMedia?.map((item, index) => (
                      <Link key={index} href={item?.link}>
                        <Image
                          quality="85"
                          proprity={true}
                          src={item?.img}
                          width={17}
                          height={17}
                          alt={`${item?.alt} -eSpark Talent`}
                        />
                      </Link>
                    ))}
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  sm={6}
                  xs={6}
                  sx={{
                    mb: {
                      xs: '40px',
                      lg: '0px',
                    },
                  }}
                >
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <FooterTitle title={data?.companyTitle} />
                      {data?.company?.map((item, index) => (
                        <Box key={index}>
                          <FooterItem href={item?.link} label={item?.label} />
                        </Box>
                      ))}
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <FooterTitle title={data?.solutionTitle} />
                      {data?.solution?.map((item, index) => (
                        <Box key={index}>
                          <FooterItem href={item?.link} label={item?.label} />
                        </Box>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  sm={6}
                  xs={6}
                  sx={{
                    mb: {
                      xs: '40px',
                      lg: '0px',
                    },
                  }}
                >
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <FooterTitle title={data?.resourceTitle} />
                      {data?.resource?.map((item, index) => (
                        <Box key={index}>
                          <FooterItem href={item?.link} label={item?.label} />
                        </Box>
                      ))}
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <FooterTitle title={data?.partnershipTitle} />
                      {data?.partnership?.map((item, index) => (
                        <Box key={index}>
                          <FooterItem href={item?.link} label={item?.label} />
                        </Box>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <FooterTitle title={data?.contactUsTitle} />
                  <Grid container>
                    <Grid item lg={12} md={12} sm={6} xs={6}>
                      {data?.contactUsSales?.map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            pr: { sm: '35%' },
                          }}
                        >
                          <FooterItem href={item?.link} label={item?.label} />
                        </Box>
                      ))}
                    </Grid>
                    <Grid item lg={12} md={12} sm={6} xs={6}>
                      {data?.contactUsInfo?.map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            pr: { md: '25%' },
                          }}
                        >
                          <FooterItem href={item?.link} label={item?.label} />
                        </Box>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box
            sx={{
              px: {
                lg: '120px',
              },
              pt: {
                lg: '25px',
              },
              background: '#ECECED',
            }}
          >
            <Divider />
            <Rights copyRights={data?.copyRight} />
          </Box>
        </>
      )}
    </>
  );
};

export default Footer;
