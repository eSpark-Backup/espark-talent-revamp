'use client';
import { Box, Button, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  blueCardContainer,
  blueCardMainContainerStyle,
  buttonStyle,
  cardStyle,
  listItemStyle,
  listItemTextStyle,
  listItemTitle,
  sideImageStyle,
  titleAndButtonContainerStyle,
  titleStyle,
} from '@/constants/pricing';

const BlueCard = ({ data, handleOpen }) => {
  const pathname = usePathname();

  const openForm = (link, target) => {
    if (pathname?.includes('/hire-remote-developers')) {
      return handleOpen();
    } else {
      return window?.open(link, target);
    }
  };

  const renderedCard = (eachItem, index) => (
    <Box key={index} sx={cardStyle}>
      <Box sx={titleAndButtonContainerStyle}>
        <Typography
          sx={titleStyle}
          dangerouslySetInnerHTML={{ __html: eachItem?.title }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            py: 2,
          }}
        >
          <Button
            onClick={() => openForm(eachItem?.btnLink || '#', '_blank')}
            disableRipple
            variant="primary"
            sx={buttonStyle}
          >
            {eachItem?.btnText}
          </Button>
        </Box>
        <Box
          component={'img'}
          src={eachItem?.cardImage || ''}
          sx={sideImageStyle}
        />
      </Box>

      <Box sx={{ py: 2, px: { xs: 1.3, sm: 1.3 }, pr: 0 }}>
        <Typography sx={listItemTitle}>
          {eachItem && Object?.keys(eachItem)[5]}
        </Typography>
        <Typography component={'ul'} sx={{ p: 0 }}>
          {eachItem?.featured?.map((item, index) => (
            <Typography key={index} component={'li'} sx={listItemStyle}>
              <Box
                component={'img'}
                src="/images/homepage/hiring-modals/green-tick.svg"
                sx={{ mt: 0.7 }}
              />
              <Typography component={'span'} sx={listItemTextStyle}>
                {item || ''}
              </Typography>
            </Typography>
          ))}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={blueCardMainContainerStyle}>
      <Box sx={{ width: 'auto' }}>
        <Box sx={blueCardContainer}>
          {data?.heroCards?.map((eachItem, index) =>
            renderedCard(eachItem, index)
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default BlueCard;
