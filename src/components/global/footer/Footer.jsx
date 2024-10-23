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
import {
  boxStyle,
  boxStyle2,
  boxStyle3,
  gridStyle,
  gridStyle2,
  marginBottomStyle,
  rightsStyle,
  socialMediaStyle,
  typographyStyle,
} from '@/constants/global/footer/Footer';

const Footer = ({ data }) => {
  const pathName = usePathname();
  return (
    <>
      {pathName !== '/book-a-demo' && (
        <>
          <Box sx={boxStyle}>
            <Container>
              <Grid container spacing={0.8}>
                <Grid item lg={5} md={4.5} sm={12} xs={12}>
                  <Link href={data?.logoLink}>
                    <Image
                      quality="85"
                      priority={true}
                      width={120}
                      height={59}
                      alt={`${data?.alt}`}
                      style={marginBottomStyle}
                      src={data?.logo}
                    />
                  </Link>
                  <Typography sx={typographyStyle}>
                    {data?.description}
                  </Typography>
                  <Box sx={socialMediaStyle}>
                    {data?.socialMedia?.map((item, index) => (
                      <Link key={index} href={item?.link} target="_blank">
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
                <Grid item lg={2} md={2.5} sm={12} xs={12} sx={gridStyle}>
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
                <Grid item lg={2} md={2} sm={12} xs={12} sx={gridStyle2}>
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
                      <Box sx={boxStyle3}>
                        <FooterItem2 section={data?.contactUs.topSection} />
                      </Box>
                    </Grid>
                    <Grid item lg={12} md={12} sm={6} xs={6}>
                      <Box sx={boxStyle3}>
                        <FooterItem2
                          data={data?.contactUs}
                          section={data?.contactUs.bottomSection}
                        />
                      </Box>
                      {pathName == '/' && (
                        <Box sx={boxStyle2}>
                          <Link
                            href={
                              'https://www.trustpilot.com/review/esparktalent.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector'
                            }
                          >
                            <Image
                              src={
                                '/images/footer/social-icons/TrustPilot2.svg'
                              }
                              height={70}
                              width={200}
                              alt="TrustPilot"
                            />
                          </Link>
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box sx={rightsStyle}>
            <Divider />
            <Rights copyRights={data?.copyRight} data={data?.socialMedia} />
          </Box>
        </>
      )}
    </>
  );
};

export default Footer;
