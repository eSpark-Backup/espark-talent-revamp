'use client';

import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import {
  boxStyle,
  titleStyle,
  descStyle,
  buttonBoxStyle,
} from '@/components/wiki/WikiSingleRigthStyles';

const WikiSingleRigth = () => {
  return (
    <Box sx={boxStyle}>
      <Typography
        color={'white'}
        pb="10px"
        lineHeight={1.85}
        textAlign={'left'}
        fontWeight={700}
        sx={titleStyle}
        variant="h4"
      >
        {`Recruit the top developer.`}
      </Typography>
      <Typography
        variant="body1"
        color={'white'}
        textAlign={'left'}
        lineHeight={2}
        sx={descStyle}
      >
        {`Let us know about your business requirements on an discovery call, and
        we'll handle the matchmaking process.`}
      </Typography>
      <Box sx={buttonBoxStyle}>
        <Link href={`/book-a-demo`} target="_blank">
          <Button variant="primary" color="secondary">
            {`Hire Now`}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default WikiSingleRigth;
