'use client';
import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Divider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';

import FooterTitle from './FooterTitle';
import FooterItem from './FooterItem';
import Rights from './Rights';
import { LABEL } from '@/constants/global/footer';

const Footer = ({ data }) => {
  return (
    <Box
      sx={{
        background: '#ECECED',
        paddingY: 1.3,
        pt: 4,
      }}
    >
      <Container>
        <Grid container>
          <Grid item lg={5} md={6} sm={6} xs={12}>
            <Image
              src={data?.logo}
              width={120}
              height={100}
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
              {data?.socialMedia?.map((item) => (
                <Link href={item.link}>
                  <Image src={item.img} width={17} height={17} alt={item.alt} />
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            md={3}
            sm={4}
            xs={12}
            sx={{
              mb: {
                xs: '40px',
                lg: '0px',
              },
            }}
          >
            <FooterTitle title={LABEL?.companyTitle} />
            {data?.company?.map((item, index) => (
              <Box key={index}>
                <FooterItem href={item.link} label={item.label} />
              </Box>
            ))}
            <FooterTitle title={LABEL?.solutionTitle} />
            {data?.solution?.map((item, index) => (
              <Box key={index}>
                <FooterItem href={item.link} label={item.label} />
              </Box>
            ))}
          </Grid>
          <Grid
            item
            lg={2}
            md={3}
            sm={2}
            xs={6}
            sx={{
              mb: {
                xs: '40px',
                lg: '0px',
              },
            }}
          >
            <FooterTitle title={LABEL?.resourceTitle} />
            {data?.resource?.map((item, index) => (
              <Box key={index}>
                <FooterItem href={item.link} label={item.label} />
              </Box>
            ))}
            <FooterTitle title={LABEL?.partnershipTitle} />

            {data?.partnership?.map((item, index) => (
              <Box key={index}>
                <FooterItem href={item.link} label={item.label} />
              </Box>
            ))}
          </Grid>
          <Grid item lg={3} md={6}>
            <FooterTitle title={LABEL?.contactUsTitle} />
            {data?.contactUs?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: '60%',
                }}
              >
                <FooterItem href={item.link} label={item.label} />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          padding: {
            lg: '5px 120px 5px 120px',
          },
        }}
      >
        <Divider />
      </Box>
      <Rights copyRights={LABEL?.copyRight} />
    </Box>
  );
};

export default Footer;
