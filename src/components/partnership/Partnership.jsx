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
    <Box sx={{ mt: '4%', mb: '6%' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8}>
            <>
              {content.map((item, index) => (
                <Box key={index} sx={{ pr: 3 }}>
                  <Typography
                    variant="h2"
                    color="secondary"
                    sx={{
                      py: '5px',
                      fontWeight: 700,
                      fontSize: '32px',
                    }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <Typography
                    sx={{
                      color: '#263238',
                      textAlign: 'justify',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '45.766px',
                      mb: '30px',
                    }}
                  >
                    {item.description}
                  </Typography>
                  {item.items?.map((list, itemIndex) => (
                    <Box
                      key={itemIndex}
                      sx={{
                        display: 'flex',
                        textAlign: 'baseline',
                        pt: '-90px',
                      }}
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
          <Grid item xs={12} md={4}>
            <Form formContent={formContent} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partnership;
