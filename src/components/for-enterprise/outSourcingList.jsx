import React from 'react';
import {
  Box,
  Typography,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
  Grid,
} from '@mui/material';
import Image from 'next/image';

const OutSourcingList = ({ data }) => {
  return (
    <>
      <Box sx={{ pt: '2%', pb:'4%' }}>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            {data?.items.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  p: ['10px', '20px'],
                }}
              >
                <Box
                  sx={{
                    borderRadius: '20px',
                    p: '20px',
                    background: ' #FFF',
                    border: '1px solid #029894',
                  }}
                >
                  <Typography variant="h5" color="secondary" sx={{ pr: '10%' }}>
                    {item?.title}
                  </Typography>
                  {item?.items?.map((list, itemIndex) => (
                    <ListItem key={itemIndex}>
                      <ListItemIcon>
                        <Image
                          src={item?.listIcon}
                          alt="List Icon"
                          width={15}
                          height={15}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          variant="body1"
                          sx={{ color: '#000', fontSize: '17px' }}
                        >
                          {list?.title}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OutSourcingList;
