import React from 'react';
import Link from 'next/link';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import { flexbox } from '@mui/system';
const WikiSingleRigth = ({ data }) => {
  return (
    <Box
      sx={{
        px: '20px',
        py: '30px',
        borderRadius: `15px`,
        background: '#3B5998',
        boxShadow: '0px 0px 7.8px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Typography variant="h3" color={'white'} textAlign={'center'} pb="10px">
        Recruit the top developer.
      </Typography>
      <Typography variant="body1" color={'white'} fontSize={'16px'}>
        Let us know about your business requirements on an discovery call, and
        we'll handle the matchmaking process.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: '20px' }}>
        <Link href={data?.hireMeLink}>
          <Button variant="primary" color="secondary">
            Hire ME
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default WikiSingleRigth;
