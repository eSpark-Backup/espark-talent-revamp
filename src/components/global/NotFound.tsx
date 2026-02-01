import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { NOT_FOUND_DATA } from '@/constants/global/notfound';

const NotFoundPage = ({ data }) => {
  return (
    <Box
      sx={{
        py: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            quality="85"
            priority={true}
            src={data?.image || NOT_FOUND_DATA.image}
            alt="404 Error"
            width={500}
            height={200}
          />
        </Box>

        <Typography variant="h2" sx={{ mt: 4, mb: 3, textAlign: 'center' }}>
          {data?.title || NOT_FOUND_DATA.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, px: '25%', textAlign: 'center' }}
        >
          {data?.desc || NOT_FOUND_DATA.desc}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link href={data?.btnLink || NOT_FOUND_DATA.btnLink}>
            <Button variant="contained" color="primary">
              {data?.btnText || NOT_FOUND_DATA.btnText}
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
