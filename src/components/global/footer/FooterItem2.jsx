import React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';

const FooterItem2 = ({ data, section }) => {
  return (
    <Box sx={{ pr: { sm: '10%', md: '0%', xs: '5%' } }}>
      {data ? (
        <Typography
          sx={{
            color: '#001C63',
            fontSize: {
              xs: '9px',
              sm: '12px',
              md: '13px',
              lg: '15px',
            },
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            my: 0,
            mt: 1.5,
            mr: {
              xs: '0px',
              md: '0px',
            },
          }}
          dangerouslySetInnerHTML={{ __html: data.label }}
        />
      ) : (
        ''
      )}
      {section.map((item, index) => (
        <Grid container alignItems="center" key={index} gap={1} pt={1.5}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Box
              component={'img'}
              alt={item.text}
              src={item.icon}
              height={'25px'}
              width={item?.text?.includes('6001') ? '20px' : 'auto'}
            />
            {item.link ? (
              <Link href={item.link}>
                <Typography
                  sx={{
                    color: '#000',
                    fontSize: {
                      xs: '9px',
                      sm: '12px',
                      md: '13px',
                      lg: '15px',
                    },
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: 'normal',
                    my: 0,
                    mr: {
                      xs: '0px',
                      md: '0px',
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </Link>
            ) : (
              <Typography
                sx={{
                  color: '#000',
                  fontSize: {
                    xs: '9px',
                    sm: '12px',
                    md: '13px',
                    lg: '15px',
                  },
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  my: 0,
                  mr: {
                    xs: '0px',
                    md: '0px',
                  },
                }}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            )}
          </Box>
          {/* <Grid item xs={10.5}> */}
          {/* </Grid> */}
          {/* <Grid item xs={10.5}> */}

          {/* </Grid> */}
        </Grid>
      ))}
    </Box>
  );
};

export default FooterItem2;
