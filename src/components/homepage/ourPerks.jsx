import React from 'react';
import {
  Box,
  Container,
  Divider,
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import Grid from '@mui/material/Grid';

import Image from 'next/image';
import Link from 'next/link';

const OurPerks = () => {
  return (
    <Box
      sx={{
        py: '4%',
      }}
    >
      <Container
        sx={{
          borderRadius: '20px',
          background: 'linear-gradient(97deg, #029894 0.53%, #036764 102.09%)',
          py: '3%',
        }}
      >
        <Grid container sx={{ display: 'flex' }}>
          <Grid item xs={5}>
            <Box
              sx={{
                display: 'flex',
                borderRadius: '20px',
                py: '20px',
                mx: '20px',
                background:
                  'linear-gradient(93deg, #029894 0.62%, #001C63 101.53%), #FFF',
                boxShadow: '0px 4.335px 0px 0px rgba(255, 255, 255, 0.69)',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={image} height={ } width={ } />
              <Typography variant="body1" color="initial">
                title
              </Typography>
              <Typography variant="body1" color="initial">
                sno
              </Typography>
               <Image src={hover image} height={} width={}/>
            </Box>
          </Grid>
          <Grid item xs={7} p={'20px'}>
            <Typography variant="h3" color={'#fff'}>
              heading
            </Typography>
            <Typography variant="body1" color={'#fff'}>
              paragraph
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                {list itme map =>
                
<ListItem
                key={itemIndex}
                >
                  <ListItemIcon>
                    
                    <Image
                              src={list icon}
                              alt="List Icon"
                              width={15}
                              height={15}
                            />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      variant="body1"
                      sx={{ py: '10px', color: '#001C63' }}
                    >
                      list item
                    </Typography>
                  </ListItemText>
                </ListItem>

                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPerks;
