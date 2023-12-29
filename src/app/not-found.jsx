import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { NOT_FOUND_DATA } from '@/constants/global/notfound';

const NotFound = () => {
  const { image, title, desc, btnLink, btnText } = NOT_FOUND_DATA;
  return (
    <Box sx={{ py: '5%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image src={image} alt="404 Error" width={500} height={200} />
        </Box>

        <Typography variant="h2" sx={{ mt: 4, mb: 3, textAlign: 'center' }}>
          {title}
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, px: '25%', textAlign: 'center' }}>
          {desc}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link href={btnLink}>
            <Button variant="contained" color="primary">
              {btnText}
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default NotFound

