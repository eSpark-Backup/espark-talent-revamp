'use client';
import React from 'react';
import {
  Box,
  Typography,
  Container,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import RectangleSharpIcon from '@mui/icons-material/RectangleSharp';
import CircleIcon from '@mui/icons-material/Circle';
import Form from './Form';

const Partnership = ({ partnership }) => {
  const { content, formContent, fields } = partnership;
  return (
    <Box
      sx={{
        mt: '2%',
        mb: '6%',
      }}
    >
      <Container>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '@media(min-width: 1024px)': {
              flexDirection: 'row',
              gap: 1,
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              '@media(min-width: 1024px)': {
                flexDirection: 'row',
                width: 'calc(100% - 505px)',
              },
            }}
          >
            <>
              {content.map((item, index) => (
                <Box key={index}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: '#001C63',
                      px: { xs: '40px', sm: 0 },
                      py: '5px',
                      pt: { xs: '25px', md: '35px' },
                      fontSize: {
                        xs: '20px !important',
                        md: '32px !important',
                      },
                      lineHeight: { xs: '29px', md: '56.266px' },
                      fontStyle: 'normal',
                      fontWeight: 700,
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <Typography
                    sx={{
                      color: '#263238',
                      textAlign: { xs: 'center', md: 'justify' },
                      fontSize: { xs: '10px', md: '18px' },
                      fontWeight: 400,
                      lineHeight: { xs: '17px', md: '45.766px' },
                    }}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  {item?.items?.map((list, itemIndex) => (
                    <Box
                      key={itemIndex}
                      sx={{
                        display: 'flex',
                        textAlign: 'baseline',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: { xs: '15px', md: '22px' },
                          ml: { md: '27px' },
                        }}
                      >
                        <CircleIcon
                          sx={{
                            color: '#000',
                            fontSize: { xs: '5px', md: '9px' },
                            width: '10px',
                            mt: { xs: '10px', md: '23px' },
                            display: {
                              xs: 'initial',
                              sm: 'initial',
                              md: 'none',
                              lg: 'none',
                            },
                          }}
                        />
                        <RectangleSharpIcon
                          fontSize="small"
                          sx={{
                            color: '#000',
                            fontSize: { xs: '5px', md: '9px' },
                            width: '10px',
                            mt: { xs: '10px', md: '23px' },
                            display: {
                              xs: 'none',
                              sm: 'none',
                              md: 'initial',
                              lg: 'initial',
                            },
                          }}
                        />
                      </ListItemIcon>

                      <ListItemText>
                        <Typography
                          sx={{
                            color: '#263238',
                            textAlign: 'justify',
                            fontSize: { xs: '10px', md: '18px !important' },
                            fontWeight: 400,
                            lineHeight: { xs: '17px', md: '45.766px' },
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
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: '505px',
              mx: 'auto',
              '@media(min-width: 1024px)': {
                width: '505px',
              },
            }}
          >
            <Form formContent={formContent} fields={fields} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Partnership;
