import React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';
import {
  iconStyle,
  textStyle,
  textStyleNoLink,
  gridStyle,
  boxStyle,
} from '@/constants/global/footer/FooterItem2';

const FooterItem2 = ({ section }) => {
  return (
    <Box>
      {section?.map((item, index) => (
        <Grid container alignItems="center" key={index} sx={gridStyle}>
          <Grid item>
            <Box sx={boxStyle}>
              {item?.icon !== '' ? (
                <Box
                  component="img"
                  alt={item?.text}
                  src={item?.icon}
                  sx={iconStyle}
                  width={item?.text?.includes('6001') ? '20px' : 'auto'}
                />
              ) : (
                ''
              )}
              {item?.link ? (
                <Typography sx={textStyle}>
                  <Link
                    href={item?.link}
                    dangerouslySetInnerHTML={{ __html: item?.text }}
                    target={item?.target ? item?.target : '_self'}
                  />
                </Typography>
              ) : (
                <Typography
                  sx={textStyleNoLink}
                  pr={{ xs: item.pr || 0, sm: 0 }}
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
