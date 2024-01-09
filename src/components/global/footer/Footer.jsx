'use client';
import React from 'react';
import { Box, Divider, Typography, Grid } from '@mui/material';
import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import FooterTitle from './FooterTitle';
import FooterItem from './FooterItem';
import Rights from './Rights';

const Footer = ({ data }) => {
  return (
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
                src={data?.logo}
                width={120}
                height={59}
                alt={data?.alt}
                style={{ marginBottom: '10px' }}
              />
              <Typography
                sx={{
                  color: '#001C63',
                  textAlign: 'justify',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '24.319px',
                  width: {
                    lg: '70%',
                    md: '80%',
                    sm: '90%',
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
                      src={item.img}
                      width={17}
                      height={17}
                      alt={item.alt}
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
                <Grid item lg={12} md={12} sm={6} xs={12}>
                  <FooterTitle title={data?.companyTitle} />
                  {data?.company?.map((item, index) => (
                    <Box key={index}>
                      <FooterItem href={item?.link} label={item?.label} />
                    </Box>
                  ))}
                </Grid>
                <Grid item lg={12} md={12} sm={6} xs={12}>
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
                <Grid item lg={12} md={12} sm={6} xs={12}>
                  <FooterTitle title={data?.resourceTitle} />
                  {data?.resource?.map((item, index) => (
                    <Box key={index}>
                      <FooterItem href={item?.link} label={item?.label} />
                    </Box>
                  ))}
                </Grid>
                <Grid item lg={12} md={12} sm={6} xs={12}>
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
                        width: { sm: '60%' },
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
                        width: { sm: '60%' },
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
          background: '#ECECED',
        }}
      >
        <Divider />
        <Rights copyRights={data?.copyRight} />
      </Box>
    </>
  );
};

export default Footer;
