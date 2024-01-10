import React from 'react';
import {
  Box,
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

import Image from 'next/image';

const WikiSingleLeft = ({ data }) => {
  return (
    <Box
      sx={{
        px: '20px',
        py: '30px',
        borderRadius: '15px',
        boxShadow: '0px 0px 7.8px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      {data?.content?.map((item, index) => (
        <Box key={index}>
          <Typography variant="h3" color="secondary" sx={{ py: '5px' }}>
            {item?.title}
          </Typography>
          <Typography
            variant="body1"
            color="#000"
            sx={{ fontSize: '18px', py: '5px' }}
          >
            {item?.description}
          </Typography>
          {item?.items?.map((list, itemIndex) => (
            <Box key={itemIndex} py={'1%'}>
              <ListItem sx={{ py: '0' }}>
                <ListItemIcon>
                  <Image
                    src={data?.listIcon}
                    alt="List Icon"
                    width={15}
                    height={15}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="body1"
                    color="#000"
                    sx={{ fontSize: '18px' }}
                  >
                    {list}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default WikiSingleLeft;
