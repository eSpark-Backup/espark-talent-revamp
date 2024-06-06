import React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';

const FooterItem2 = ({ section }) => {
  return (
    <Box
      sx={{
        pr: { xs: '5%', sm: '10%', md: '0%' },
        pl: { xs: '5%', sm: '10%', md: '0%' },
      }}
    >
      {section?.map((item, index) => (
        <Grid container alignItems="center" key={index} sx={{ pt: 1.5 }}>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {item?.icon !== '' ? (
                <Box
                  component="img"
                  alt={item?.text}
                  src={item?.icon}
                  sx={{
                    height: '25px',
                    width: item?.text?.includes('6001') ? '20px' : 'auto',
                  }}
                />
              ) : (
                ''
              )}
              {item?.link ? (
                <Typography
                  sx={{
                    color: '#000',
                    fontSize: {
                      xs: '9px',
                      sm: '12px',
                      md: '13px',
                      lg: '15px',
                    },
                    fontWeight: 300,
                    lineHeight: 1.2,
                  }}
                >
                  <Link
                    href={item?.link}
                    dangerouslySetInnerHTML={{ __html: item?.text }}
                    target={item?.target ? item?.target : '_self'}
                  />
                </Typography>
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
                    lineHeight: 1.2,
                    fontWeight: 400,
                    pr: { xs: item.pr || 0, sm: 0 },
                  }}
                  dangerouslySetInnerHTML={{ __html: item?.text }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default FooterItem2;
