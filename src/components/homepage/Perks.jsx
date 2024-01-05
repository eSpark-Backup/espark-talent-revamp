'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  ListItemIcon,
  Button,
  Grid,
} from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';

const Perks = ({ data }) => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? index : index);
  };
  const isXsOrSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Box sx={{ py: '4%' }}>
      <Container
        sx={{
          borderRadius: '20px',
          background: 'linear-gradient(97deg, #029894 0.53%, #036764 102.09%)',
          py: '3%',
        }}
      >
        <Grid container sx={{ display: 'flex' }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ margin: '0px auto' }}>
              {data?.map((perk, index) => (
                <Box
                  key={index}
                  onClick={() => handleCardClick(index)}
                  sx={{
                    display: 'flex',
                    gap: '10px',
                    borderRadius: '20px',
                    mb: '20px',
                    py: '20px',
                    px: { xs: '15px', md: '20px' },
                    mx: { xs: '15px', md: '20px' },
                    background:
                      index === selectedCard
                        ? 'linear-gradient(93deg, #029894 0.62%, #001C63 101.53%), #FFF'
                        : '#fff',
                    boxShadow: '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)',
                    flexDirection: 'row',
                    alignItems: 'center',
                    cursor: 'pointer',
                    border: '2px solid #fff',
                  }}
                >
                  <Image
                    src={index === selectedCard ? perk?.activeIcon : perk?.icon}
                    height={30}
                    width={isXsOrSm ? 15 : 30}
                    alt={perk.title}
                  />
                  <Typography
                    variant={isXsOrSm ? 'h7' : 'h2'}
                    color={index === selectedCard ? '#FFFFFF' : '#001C63'}
                    sx={{ flexWrap: 'wrap', pl: '10px' }}
                  >
                    {perk?.title}
                  </Typography>
                  <Typography
                    variant={isXsOrSm ? 'h4' : 'h2'}
                    color={'#E0DDDDAD'}
                  >
                    {perk?.sno}
                  </Typography>
                  <Image
                    src={perk?.hoverIcons}
                    height={20}
                    width={isXsOrSm ? 12 : 20}
                    alt={perk.title}
                  />
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                p: { lg: '20px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: { xs: 'center', md: 'justify' },
              }}
            >
              <Typography
                variant={isXsOrSm ? 'h4' : 'h3'}
                color={'#fff'}
                sx={{
                  mb: { xs: '10px', md: '20px' },
                  mt: { md: '-15px' },
                }}
              >
                {data[selectedCard]?.content?.heading}
              </Typography>
              <Typography
                variant="body1"
                color={'#fff'}
                sx={{
                  fontSize: isXsOrSm ? '15px' : '20px',
                  mb: { xs: '20px', md: '40px' },
                }}
              >
                {data[selectedCard]?.content?.paragraph}
              </Typography>
              <Grid container>
                {data[selectedCard]?.content?.list?.map((item, index) => (
                  <Grid key={index} item xs={6}>
                    <Box sx={{ display: 'flex', textAlign: 'baseline' }}>
                      <ListItemIcon
                        sx={{ minWidth: { xs: '20px', md: '35px' } }}
                      >
                        <TaskAltIcon
                          fontSize="small"
                          sx={{
                            color: '#fff',
                            fontSize: { xs: '12px', sm: '15px', md: '20px' },
                          }}
                        />
                      </ListItemIcon>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 2,
                          color: '#FFF',
                          fontSize: {
                            xs: '11px',
                            sm: '13px',
                            md: '15px',
                            lg: '18px',
                          },
                        }}
                      >
                        {item?.item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Link href={data[selectedCard]?.content?.buttonLink}>
                    <Button variant="contained" color="secondary">
                      {data[selectedCard]?.content?.buttonText}
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Perks;
