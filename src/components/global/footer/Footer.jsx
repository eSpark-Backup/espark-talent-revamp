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
import FooterItem2 from './FooterItem2';

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
                  <Link href={data?.logoLink}>
                    <Image
                      quality="85"
                      priority={true}
                      src={data?.logo}
                      width={120}
                      height={59}
                      alt={`${data?.alt}`}
                      style={{ marginBottom: '10px' }}
                    />
                  </Link>
                  <Typography
                    sx={{
                      color: '#001C63',
                      fontSize: {
                        xs: '10px',
                        sm: '10px',
                        md: '13px',
                        lg: '15px',
                      },
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '24.32px',
                      pr: {
                        lg: '18%',
                        md: '15%',
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
                      mb: {
                        xs: '10px',
                        lg: '0px',
                      },
                    }}
                  >
                    {data?.socialMedia?.map((item, index) => (
                      <Link key={index} href={item?.link} target="blank">
                        <Image
                          quality="85"
                          priority={true}
                          src={item?.img}
                          width={17}
                          height={17}
                          alt={`${item?.alt}`}
                        />
                      </Link>
                    ))}
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  sm={12}
                  xs={12}
                  sx={{
                    mb: {
                      xs: '10px',
                      lg: '0px',
                    },
                  }}
                >
                  <Grid container>
                    <Grid item lg={12} md={12} sm={6} xs={6}>
                      <FooterTitle title={data?.companyTitle} />
                      {data?.company?.map((item, index) => (
                        <Box key={index}>
                          <FooterItem href={item?.link} label={item?.label} />
                        </Box>
                      ))}
                    </Grid>
                    <Grid item lg={12} md={12} sm={6} xs={6}>
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
                  sm={12}
                  xs={12}
                  sx={{
                    mb: {
                      xs: '10px',
                      lg: '0px',
                    },
                  }}
                >
                  <Grid container>
                    <Grid item lg={12} md={12} sm={6} xs={6}>
                      <FooterTitle title={data?.resourceTitle} />
                      {data?.resource?.map((item, index) => (
                        <Box key={index}>
                          <FooterItem href={item?.link} label={item?.label} />
                        </Box>
                      ))}
                    </Grid>
                    <Grid item lg={12} md={12} sm={6} xs={6}>
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
                      <Box
                        sx={{
                          pr: { sm: '35%' },
                        }}
                      >
                        <FooterItem2
                          href={data?.contactUsSales?.link}
                          label={data?.contactUsSales?.label}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={12} md={12} sm={6} xs={6}>
                      <Box
                        sx={{
                          pr: { sm: '35%' },
                        }}
                      >
                        <FooterItem2
                          href={data?.contactUsInfo?.link}
                          label={data?.contactUsInfo?.label}
                        />
                      </Box>
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
                xs: '25px',
                lg: '25px',
              },
              background: '#ECECED',
            }}
          >
            <Divider />
            <Rights copyRights={data?.copyRight} data={data?.socialMedia} />
          </Box>
        </>
      )}
    </>
  );
};

export default Footer;
