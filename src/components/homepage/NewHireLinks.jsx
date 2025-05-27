import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

const NewHireLinks = ({ data, setDropdown }) => {
  const { routes } = data || {};

  return (
    <Box
      sx={{
        width: 'clamp(286px, 5vw + 300px, 416px)',
        p: 3,
        maxWidth: '416px',
        minHeight: { xs: '180px', lg: '246px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        gap: 1.5,
      }}
    >
      {routes?.map(({ name, link }, index) => (
        <Typography
          key={index}
          sx={{
            fontSize: 'clamp(18px, 1vw + 5px, 22px)',
            color: '#111845',
            fontWeight: 600,
            textAlign: 'left',
            '&:hover': {
              color: '#029894',
            },
          }}
          onClick={() => setDropdown(null)}
        >
          <Link href={link}>{name}</Link>
        </Typography>
      ))}
    </Box>
  );
};

export default NewHireLinks;
