'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import { Book_A_Demo_Data } from '@/constants/book-a-demo';
import BookADemoForm from '../book-a-demo/BookADemoForm';

const BookAMeeting = ({ data }) => {
  const { form } = Book_A_Demo_Data;
  const heroSectionStyle = {
    pt: { xs: 5, sm: 5 },
    pb: { xs: 5, sm: 8 },
    px: { xs: 2, sm: 5 },
  };
  const heroBoxStyle = {
    mx: 'auto',
    display: 'flex',
    maxWidth: '1400px',
    gap: 2,
    justifyContent: 'center',
    '@media(min-width: 280px) and (max-width:1259px)': {
      flexDirection: 'column !important',
      gap: 10,
    },
    '@media(max-width: 425px)': {
      gap: 6,
    },
  };
  const logoBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    order: { xs: 2, sm: 0 },
    gap: { xs: 2, sm: 3, md: 5, lg: 7 },
    '@media(min-width: 280px) and (max-width:1259px)': {
      mx: 'auto',
    },
  };
  const logoBoxStyle2 = {
    display: { xs: 'none', sm: 'flex' },
    mx: { xs: 'auto', md: 0 },
    alignItems: 'center',
  };
  const logoStyle = {
    width: { xs: 122, sm: 132, md: 142, lg: 162 },
    height: { xs: 50, sm: 60, md: 80, lg: 100 },
  };
  const titleBoxStyle = { display: 'flex', flexDirection: 'column', gap: 6 };
  const titleBoxStyle2 = {
    display: 'flex',
    textAlign: { xs: 'center', sm: 'center', md: 'left' },
    flexDirection: 'column',
    gap: { xs: 1, sm: 0.5, lg: 1 },
    pr: { xs: 0, md: 4 },
  };
  const titleStyle = {
    fontSize: {
      xs: '22px',
      sm: '30px',
      md: '43px',
      lg: '48px',
    },
    textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    fontWeight: 600,
    lineHeight: { sm: '40px', lg: '56px' },
  };
  const subTitleBoxStyle = {
    mx: { xs: 'auto', md: 0 },
    maxWidth: {
      xs: '350px',
      sm: '450px',
      md: '650px',
      lg: '700px',
    },
  };
  const subTitleStyle = {
    fontSize: {
      xs: '21px',
      sm: '25px',
      md: '40px',
      lg: '45px',
    },
    textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    fontWeight: 500,
    lineHeight: {
      xs: '30px',
      sm: '38px',
      md: '45px',
      lg: '56px',
    },
  };
  const descriptionStyle = {
    fontSize: {
      xs: '14px',
      sm: '15px',
      md: '18px',
      lg: '20px',
      xl: '20px',
    },
    color: '#0E1155',
    fontWeight: 500,
    lineHeight: { xs: 'auto', lg: '37px' },
  };
  const servicesStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: { sm: 2, md: 6, lg: 5 },
    pr: { md: 3 },
    '@media(max-width: 722px)': {
      flexWrap: 'wrap',
      gap: 3,
    },
  };
  const singleServiceStyle = {
    display: 'flex',
    maxWidth: {
      xs: '180px',
      sm: '180px',
      md: '210px',
      lg: '245px',
    },
    mx: { xs: 'auto', sm: 'auto', md: 0 },
    alignItems: { xs: 'center', md: 'start' },
    textAlign: { xs: 'center', md: 'start' },
    flexDirection: 'column',
    gap: 1.1,
  };
  const singleServiceTitleStyle = {
    fontSize: {
      xs: '11px',
      sm: '12px',
      md: '18px',
      lg: '20px',
    },
    maxWidth: { sm: '140px', md: '200px', lg: '227px' },
    fontWeight: 600,
  };
  const singleServiceDescriptionStyle = {
    color: `#1D4E72`,
    fontSize: {
      xs: '10px',
      sm: '11px',
      md: '13px',
      lg: '15px',
    },
    fontWeight: 400,
    maxHeight: { md: '65px', lg: '90px' },
  };
  const BookADemoFormStyle = {
    width: 'auto',
    maxWidth: '486px',
    height: 'auto',
    borderRadius: '8px',
    py: 3,
    px: 0.8,
    boxShadow: '0 0 9px 0 rgba(0,0,0,0.29)',
    order: { xs: 0, sm: 1 },
    '@media(min-width: 280px) and (max-width:1259px)': {
      mx: 'auto',
    },
  };
  const BookADemoFormBoxStyle = { pt: { xs: 0, md: 3 }, pb: { xs: 0, sm: 1 } };
  return (
    <>
      <Box id={'top'} sx={heroSectionStyle}>
        <Box sx={heroBoxStyle}>
          <Box sx={logoBoxStyle}>
            <Box sx={logoBoxStyle2}>
              <Link href="/">
                <Box
                  component={'img'}
                  sx={logoStyle}
                  src="/images/eSpark Talent Logo.svg"
                  alt="eSpark Talent logo"
                />
              </Link>
            </Box>
            <Box sx={titleBoxStyle}>
              <Box sx={titleBoxStyle2}>
                <Typography
                  variant="h1"
                  sx={titleStyle}
                  color={data?.titleColor}
                >
                  {data?.title}
                </Typography>
                <Box sx={subTitleBoxStyle}>
                  <Typography
                    variant="h1"
                    sx={subTitleStyle}
                    color={data?.subTitleColor}
                  >
                    {data?.subTitle}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mx: { xs: 'auto', md: 0 },
                    maxWidth: {
                      xs: '400px',
                      sm: '450px',
                      md: '650px',
                      lg: '700px',
                    },
                  }}
                >
                  <Typography sx={descriptionStyle}>
                    {data?.description}
                  </Typography>
                </Box>
              </Box>
              <Box sx={servicesStyle}>
                {data &&
                  data?.services?.map((item, index) => (
                    <>
                      <Box key={index} sx={singleServiceStyle}>
                        <Box
                          component={'img'}
                          src={item?.image || ''}
                          alt={`${item?.alt || ''}`}
                          sx={{ mx: { xs: 'auto', sm: 0 } }}
                          width={28}
                          height={28}
                        />
                        <Typography sx={singleServiceTitleStyle}>
                          {item?.title || ''}
                        </Typography>
                        <Typography sx={singleServiceDescriptionStyle}>
                          {item?.description || ''}
                        </Typography>
                      </Box>
                    </>
                  ))}
              </Box>
            </Box>
          </Box>
          <Box sx={BookADemoFormBoxStyle}>
            <Box sx={BookADemoFormStyle}>
              <BookADemoForm form={form} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BookAMeeting;
