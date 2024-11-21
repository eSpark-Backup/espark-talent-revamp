'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';

const HireLinks = ({ data, currentPage, setDropdown }) => {
  return (
    <Box
      sx={{
        my: currentPage?.includes('hire-remote-deevelopers') ? 4 : 3.7,
        width: '100%',
        background: '#F7F8FB',
        '@media (max-width: 987px)': {
          background: '#fff',
          my: 0,
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderRadius: '6px',
          background: '#F7F8FB',
          mx: 'auto',
          '@media (min-width:1500px)': {
            maxWidth: '1450px',
          },
          '@media (max-width: 987px)': {
            background: '#fff',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {data?.sections?.map((section, index) => (
            <Box
              key={index}
              sx={{
                maxWidth: index === 0 ? '220px' : '260px',
                mx: { xs: 0, md: 'auto' },
                p: 2,
                pl: 5,
                pr: 3.5,
                '@media (min-width: 1440px)': {
                  maxWidth: index === 0 ? '300px' : '330px',
                },
                '@media (min-width:1060px) and (max-width: 1439px)': {
                  maxWidth: index === 0 ? '300px' : '330px',
                },
                '@media (max-width: 987px)': {
                  p: 0,
                },
              }}
            >
              {section?.lists?.map((list, listIndex) => (
                <div key={listIndex}>
                  <Typography
                    variant="h5"
                    color="primary"
                    sx={{
                      pb: '4px',
                      fontWeight: 700,
                      textWrap: { xs: 'wrap', lg: 'nowrap' },
                      fontSize: {
                        xs: '16px',
                        sm: '15px',
                        md: '16px',
                        lg: '16px',
                        xl: '23px',
                      },
                    }}
                  >
                    {list?.heading}
                  </Typography>
                  {list?.listItems?.map((item, itemIndex) => (
                    <Box
                      onClick={() => setDropdown(null)}
                      key={`${index}-${listIndex}-${itemIndex}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 'auto',
                        my: 1.5,
                      }}
                    >
                      <Link href={item?.link}>
                        <Typography
                          variant="body1"
                          sx={{
                            py: '0px',
                            color: 'black',
                            '&:hover': {
                              color: '#029894',
                            },
                            fontSize: {
                              xs: '14px',
                              sm: '15px',
                              md: '15px',
                              lg: '16px',
                            },
                            fontWeight: 400,
                          }}
                        >
                          {item?.title}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
                </div>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HireLinks;
