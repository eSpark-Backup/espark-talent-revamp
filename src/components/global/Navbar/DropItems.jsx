import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const DropItems = ({
  icon,
  name,
  description,
  href,
  index,
  collapse,
  setDropdown,
}) => {
  const lastIndex = collapse?.length - 1;
  return (
    <Link href={href || '#'}>
      <Box
        onClick={() => setDropdown(null)}
        key={'1'}
        sx={{
          maxWidth: { xs: '300px', lg: '340px' },
          display: 'flex',
          alignItems: 'start',
          gap: 2.5,
          pt: 2.5,
          px: 2.5,
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
        }}
      >
        <Box sx={{ width: { xs: '30px' }, pt: 0.5 }}>
          <Box
            component={'img'}
            src={icon || ''}
            sx={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Box
          sx={{
            width: '80%',
            borderBottom: lastIndex === index ? 0 : '1px solid #0000001A',
            pb: 2.5,
          }}
        >
          <Typography
            sx={{
              color: '#222222',
              fontSize: { xs: '11px', sm: '12px', md: '13px', lg: '17px' },
              fontWeight: 600,
            }}
          >
            {name || ''}
          </Typography>
          <Typography
            sx={{
              transition: 'all 300ms linear',
              color: 'rgb(0, 0, 0)',
              fontSize: { xs: '10px', lg: '12px' },
              fontWeight: 400,
            }}
          >
            {description || ''}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default DropItems;
