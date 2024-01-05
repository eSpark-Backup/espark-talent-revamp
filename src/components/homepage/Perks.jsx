'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Grid,
} from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';

const Perks = ({ data }) => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? index : index);
  };

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
          <Grid item xs={5}>
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
                  px: '20px',
                  mx: '20px',
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
                  width={30}
                  alt={perk.title}
                />
                <Typography
                  variant="h2"
                  color={index === selectedCard ? '#FFFFFF' : '#001C63'}
                  sx={{ flexWrap: 'wrap', pl: '10px' }}
                >
                  {perk?.title}
                </Typography>
                <Typography variant="h1" color={'#E0DDDDAD'}>
                  {perk?.sno}
                </Typography>
                <Image
                  src={perk?.hoverIcons}
                  height={20}
                  width={20}
                  alt={perk.title}
                />
              </Box>
            ))}
          </Grid>

          <Grid
            item
            xs={7}
            sx={{
              p: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <>
              <Typography variant="h3" color={'#fff'}>
                {data[selectedCard]?.content?.heading}
              </Typography>
              <Typography variant="body1" color={'#fff'}>
                {data[selectedCard]?.content?.paragraph}
              </Typography>
              <Grid container>
                {data[selectedCard]?.content?.list?.map((item, index) => (
                  <Grid key={index} item xs={6} sx={{ display: 'flex' }}>
                    <ListItem>
                      <ListItemIcon>
                        <Image
                          src={data[selectedCard]?.content?.listIcon}
                          alt="List Icon"
                          width={15}
                          height={15}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          variant="body1"
                          sx={{ py: '10px', color: '#FFF', fontSize: '18px' }}
                        >
                          {item?.item}
                        </Typography>
                      </ListItemText>
                    </ListItem>
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
            </>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Perks;
