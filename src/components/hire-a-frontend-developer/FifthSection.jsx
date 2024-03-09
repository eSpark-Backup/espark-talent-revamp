import { Avatar, Box, Chip, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const FifthSection = ({ data }) => {
  console.log(data, 'data');
  return (
    <Box sx={{ backgroundColor: '#F7F8FF', py: 3 }}>
      <Container>
        <Box py={2}>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              textTransform: 'capitalize',
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: '67px',
              color: '#001C63',
              px: '10%',
            }}
            dangerouslySetInnerHTML={{
              __html: data?.title,
            }}
          />
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              textAlign: 'center',
              fontSize: '19px',
              fontWeight: 400,
              lineHeight: '29px',
              color: '#001C63',
              px: '12%',
            }}
          >
            {data?.descrcipton}
          </Typography>
        </Box>
        <Grid container display={'flex'} spacing={3}>
          {data?.items?.map((item, index) => (
            <Grid item xs={4} gap={'20px'} key={index}>
              <Typography
                variant="h3"
                textAlign="center"
                sx={{
                  fontSize: '22px',
                  fontWeight: 700,
                  lineHeight: '48px',
                  textAlign: 'left',
                  color: '#029894',
                }}
              >
                {item?.title}
              </Typography>
              <Box py={'10px'} sx={{ gap: 2, alignItems: 'center' }}>
                {item?.items.map((chip, index) => (
                  <Chip
                    key={index}
                    avatar={
                      <Avatar
                        src={'/images/hire-a-frontend-developer/bulit.png'}
                      />
                    }
                    label={
                      <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{
                          fontSize: '19px',
                          fontWeight: 400,
                          lineHeight: '35px',
                          textAlign: 'left',
                          color: '#000000',
                        }}
                      >
                        {chip}
                      </Typography>
                    }
                    sx={{
                      backgroundColor: '#E9ECF6',
                      color: '#000',
                      borderRadius: '3px',
                      mb: '10px',
                      mr: '10px',
                    }}
                  />
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FifthSection;
