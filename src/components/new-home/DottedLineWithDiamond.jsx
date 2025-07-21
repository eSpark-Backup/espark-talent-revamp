import React from 'react';
import { Box } from '@mui/material';

const DottedLineWithDiamond = () => {
  return (
    <Box width={'100%'} display="flex" alignItems="center">
      <Box
        sx={{
          borderBottom: {
            xs: '1.99px dotted #acacae',
            md: '2px dotted #acacae ',
          },
          flexGrow: 1,
          height: 0,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: { xs: 4, md: 6 },
            height: { xs: 4, md: 6 },
            backgroundColor: '#57585CBD',
            transform: 'rotate(45deg)',
            position: 'absolute',
            right: { xs: -5.5, md: -4.5 },
            top: '50%',
            translate: '0 -50%',
          }}
        />
      </Box>
    </Box>
  );
};

export default DottedLineWithDiamond;
