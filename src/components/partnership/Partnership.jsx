'use client';
import {
  Grid,
  Typography,
  Box,
  Container,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import RectangleSharpIcon from '@mui/icons-material/RectangleSharp';
import Form from './Form';

const Partnership = ({ partnership }) => {
  const { content, formContent } = partnership;
  return (
    <Box sx={{ mt: { lg: '60px', xs: '15px' } }}>
      <Container>
        <Grid container>
          <Grid item md={8}>
            <>
              {content.map((item, index) => (
                <Box key={index} sx={{ pr: 3 }}>
                  <Typography variant="h3" color="secondary" sx={{ py: '5px' }}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#263238',
                      textAlign: 'justify',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '45.766px',
                    }}
                  >
                    {item.description}
                  </Typography>
                  {item.items?.map((list, itemIndex) => (
                    <Box
                      key={itemIndex}
                      sx={{ display: 'flex', textAlign: 'baseline' }}
                    >
                      <ListItemIcon sx={{ minWidth: '30px', ml: '14px' }}>
                        <RectangleSharpIcon
                          fontSize="small"
                          sx={{ color: '#000', width: '10px', mt: '16px' }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          sx={{
                            color: '#263238',
                            textAlign: 'justify',
                            fontSize: '18px',
                            fontWeight: 400,
                            lineHeight: '45.766px',
                          }}
                        >
                          {list}
                        </Typography>
                      </ListItemText>
                    </Box>
                  ))}
                </Box>
              ))}
            </>
          </Grid>
          <Grid item md={4}>
            <Form formContent={formContent} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partnership;
