import { Box, Typography } from '@mui/material'
import React from 'react'

const CustomSection = ({items}) => {
  return (
    <><Box
            sx={{
              mx: 'auto',
              maxWidth: '900px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr 1fr',
              '@media(min-width: 280px) and (max-width: 980px)': {
                maxWidth: 'auto',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '1fr',
                rowGap: '50px',
              },
              pt: 10,
              '@media(max-width: 425px)': {
                pt: 8,
              },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: 'auto',
                width: 'auto',
                '@media(min-width: 425px) and (max-width: 980px)': {
                  mx: 'auto',
                  width: '401px',
                },
                '@media(min-width: 280px) and (max-width: 424px)': {
                  mx: 'auto',
                  width: 'auto',
                },
              }}
            >
              <Box
                component={'img'}
                src={items[0]?.start_point || ''}
                sx={{
                  width: 'auto',
                  height: 'auto',
                  mx: 'auto',
                  position: 'absolute',
                  top: -55,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    left: '19%',
                  },
                  '@media(max-width: 425px)': {
                    top: -42,
                    left: '24%',
                    width: '35px',
                    height: '40px',
                  },
                }}
              />
              <Box
                component={'img'}
                src={items[0]?.horizontal || ''}
                sx={{
                  width: 'auto',
                  height: 'auto',
                  mx: 'auto',
                  position: 'absolute',
                  right: -23,
                  bottom: '42%',
                  transform: 'translateY(-50%)',
                  zIndex: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    display: 'none',
                  },
                }}
              />
              <Box
                component={'img'}
                src={items[0]?.vertical || ''}
                sx={{
                  display: 'none',
                  width: 'auto',
                  height: 'auto',
                  mx: 'auto',
                  position: 'absolute',
                  bottom: -50,
                  right: '19%',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    display: 'flex',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  mx: 'auto',
                  maxWidth: '401px',
                  height: '224px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  background: '#fff',
                  boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                  '@media(max-width: 425px)': {
                    mx: 1.2,
                    height: 'auto',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    height: '89.498px',
                    display: 'flex',
                    borderRadius: '20px 20px 0 0 ',
                    background: '#F7F8FB',
                    p: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    src={items[0]?.icon || ''}
                    alt={items[0]?.alt || ''}
                    sx={{
                      width: 42,
                      height: 42,
                      '@media(max-width: 425px)': {
                        width: 30,
                        height: 30,
                      },
                      '@media(max-width: 280px)': {
                        width: 25,
                        height: 25,
                      },
                    }}
                  />
                  <Typography
                    component={'h4'}
                    color="secondary"
                    sx={{
                      ml: 2,
                      color: '#001C63',
                      fontSize: '20px',
                      fontWeight: 600,
                      '@media(max-width: 425px)': {
                        fontSize: '18px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '16px',
                      },
                    }}
                  >
                    {items[0]?.title || ''}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: '10px 20px 20px 20px',
                    borderRadius: '0 0 20px 20px',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                      lineHeight: '23px',
                      '@media(max-width: 425px)': {
                        fontSize: '15px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '13px',
                      },
                    }}
                    color="initial"
                  >
                    {items[0]?.paragraph || ''}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'relative',
                height: 'auto',
                width: 'auto',
                '@media(min-width: 425px) and (max-width: 980px)': {
                  mx: 'auto',
                  width: '401px',
                },
                '@media(min-width: 280px) and (max-width: 424px)': {
                  mx: 'auto',
                  width: 'auto',
                },
              }}
            >
              <Box
                component={'img'}
                src={items[1]?.vertical || ''}
                sx={{
                  width: 'auto',
                  height: 'auto',
                  mx: 'auto',
                  position: 'absolute',
                  bottom: -50,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    left: '19%',
                  },
                  '@media(max-width: 425px)': {
                    left: '24%',
                  },
                }}
              />
              <Box
                sx={{
                  mx: 'auto',
                  maxWidth: '401px',
                  height: '224px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  background: '#fff',
                  boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                  position: 'relative',
                  zIndex: 1,
                  '@media(min-width: 980px)': {
                    mt: 6,
                  },
                  '@media(max-width: 425px)': {
                    mx: 1.2,
                    height: 'auto',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    height: '89.498px',
                    display: 'flex',
                    borderRadius: '20px 20px 0 0 ',
                    background: '#F7F8FB',
                    p: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    src={items[1]?.icon || ''}
                    alt={items[1]?.alt || ''}
                    sx={{
                      width: 42,
                      height: 42,
                      '@media(max-width: 425px)': {
                        width: 30,
                        height: 30,
                      },
                      '@media(max-width: 280px)': {
                        width: 25,
                        height: 25,
                      },
                    }}
                  />
                  <Typography
                    component={'h4'}
                    color="secondary"
                    sx={{
                      ml: 2,
                      color: '#001C63',
                      fontSize: '20px',
                      fontWeight: 600,
                      '@media(max-width: 425px)': {
                        fontSize: '18px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '16px',
                      },
                    }}
                  >
                    {items[1]?.title || ''}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: '10px 20px 20px 20px',
                    borderRadius: '0 0 20px 20px',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                      lineHeight: '23px',
                      '@media(max-width: 425px)': {
                        fontSize: '15px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '13px',
                      },
                    }}
                    color="initial"
                  >
                    {items[1]?.paragraph || ''}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'relative',
                height: 'auto',
                width: 'auto',
                '@media(min-width: 425px) and (max-width: 980px)': {
                  mx: 'auto',
                  width: '401px',
                },
                '@media(min-width: 280px) and (max-width: 424px)': {
                  mx: 'auto',
                  width: 'auto',
                },
              }}
            >
              <Box
                component={'img'}
                src={items[2]?.horizontal || ''}
                sx={{
                  maxWidth: 'auto',
                  height: 'auto',
                  mx: 'auto',
                  position: 'absolute',
                  right: -49,
                  bottom: '42%',
                  transform: 'translateY(-50%)',
                  zIndex: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    display: 'none',
                  },
                }}
              />
              <Box
                component={'img'}
                src={items[2]?.vertical || ''}
                sx={{
                  width: 'auto',
                  height: 'auto',
                  mx: 'auto',
                  position: 'absolute',
                  bottom: -4,
                  left: '57%',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    left: '80.5%',
                    bottom: -50,
                    right: '19%',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  ml: 'auto',
                  mr: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    mx: 'auto',
                  },
                  maxWidth: '401px',
                  height: '224px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  background: '#fff',
                  boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                  '@media(max-width: 425px)': {
                    mx: 1.2,
                    height: 'auto',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    height: '89.498px',
                    display: 'flex',
                    borderRadius: '20px 20px 0 0 ',
                    background: '#F7F8FB',
                    p: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    src={items[2]?.icon || ''}
                    alt={items[2]?.alt || ''}
                    sx={{
                      width: 42,
                      height: 42,
                      '@media(max-width: 425px)': {
                        width: 30,
                        height: 30,
                      },
                      '@media(max-width: 280px)': {
                        width: 25,
                        height: 25,
                      },
                    }}
                  />
                  <Typography
                    component={'h4'}
                    color="secondary"
                    sx={{
                      ml: 2,
                      color: '#001C63',
                      fontSize: '20px',
                      fontWeight: 600,
                      '@media(max-width: 425px)': {
                        fontSize: '18px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '16px',
                      },
                    }}
                  >
                    {items[2]?.title || ''}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: '10px 20px 20px 20px',
                    borderRadius: '0 0 20px 20px',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                      lineHeight: '23px',
                      '@media(max-width: 425px)': {
                        fontSize: '15px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '13px',
                      },
                    }}
                    color="initial"
                  >
                    {items[2]?.paragraph || ''}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'relative',
                height: 'auto',
                width: 'auto',
                '@media(min-width: 425px) and (max-width: 980px)': {
                  mx: 'auto',
                  width: '401px',
                },
                '@media(min-width: 280px) and (max-width: 424px)': {
                  mx: 'auto',
                  width: 'auto',
                },
              }}
            >
              <Box
                component={'img'}
                src={items[3]?.vertical || ''}
                sx={{
                  display: 'none',
                  width: 'auto',
                  height: 'auto',
                  mx: 'auto',
                  position: 'absolute',
                  bottom: -51,
                  left: '19%',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    display: 'flex',
                  },
                  '@media(max-width: 425px)': {
                    left: '24%',
                  },
                }}
              />
              <Box
                sx={{
                  ml: 'auto',
                  mr: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    mx: 'auto',
                  },
                  maxWidth: '401px',
                  height: '224px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  background: '#fff',
                  boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                  position: 'relative',
                  zIndex: 1,
                  '@media (min-width: 980px)': {
                    mt: 6,
                  },
                  '@media(max-width: 425px)': {
                    mx: 1.2,
                    height: 'auto',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    height: '89.498px',
                    display: 'flex',
                    borderRadius: '20px 20px 0 0 ',
                    background: '#F7F8FB',
                    p: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    src={items[3]?.icon || ''}
                    alt={items[3]?.alt || ''}
                    sx={{
                      width: 42,
                      height: 42,
                      '@media(max-width: 425px)': {
                        width: 30,
                        height: 30,
                      },
                      '@media(max-width: 280px)': {
                        width: 25,
                        height: 25,
                      },
                    }}
                  />
                  <Typography
                    component={'h4'}
                    color="secondary"
                    sx={{
                      ml: 2,
                      color: '#001C63',
                      fontSize: '20px',
                      fontWeight: 600,
                      '@media(max-width: 425px)': {
                        fontSize: '18px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '16px',
                      },
                    }}
                  >
                    {items[3]?.title || ''}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: '10px 20px 20px 20px',
                    borderRadius: '0 0 20px 20px',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                      lineHeight: '23px',
                      '@media(max-width: 425px)': {
                        fontSize: '15px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '13px',
                      },
                    }}
                    color="initial"
                  >
                    {items[3]?.paragraph || ''}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'relative',
                height: 'auto',
                width: 'auto',
                '@media(min-width: 425px) and (max-width: 980px)': {
                  mx: 'auto',
                  width: '401px',
                },
                '@media(min-width: 280px) and (max-width: 424px)': {
                  mx: 'auto',
                  width: 'auto',
                },
              }}
            >
              <Box
                component={'img'}
                src={items[4]?.horizontal || ''}
                sx={{
                  width: 'auto',
                  height: 'auto',
                  mx: 'auto',
                  position: 'absolute',
                  right: -23,
                  bottom: '42%',
                  transform: 'translateY(-50%)',
                  zIndex: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    display: 'none',
                  },
                }}
              />
              <Box
                component={'img'}
                src={items[4]?.vertical || ''}
                sx={{
                  display: 'none',
                  width: 'auto',
                  height: 'auto',
                  mx: 'auto',
                  position: 'absolute',
                  bottom: -51,
                  right: '19%',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    display: 'flex',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  mx: 'auto',
                  maxWidth: '401px',
                  height: '224px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  background: '#fff',
                  boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                  '@media(max-width: 425px)': {
                    mx: 1.2,
                    height: 'auto',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    height: '89.498px',
                    display: 'flex',
                    borderRadius: '20px 20px 0 0 ',
                    background: '#F7F8FB',
                    p: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    src={items[4]?.icon || ''}
                    alt={items[4]?.alt || ''}
                    sx={{
                      width: 42,
                      height: 42,
                      '@media(max-width: 425px)': {
                        width: 30,
                        height: 30,
                      },
                      '@media(max-width: 280px)': {
                        width: 25,
                        height: 25,
                      },
                    }}
                  />
                  <Typography
                    component={'h4'}
                    color="secondary"
                    sx={{
                      ml: 2,
                      color: '#001C63',
                      fontSize: '20px',
                      fontWeight: 600,
                      '@media(max-width: 425px)': {
                        fontSize: '18px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '16px',
                      },
                    }}
                  >
                    {items[4]?.title || ''}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: '10px 20px 20px 20px',
                    borderRadius: '0 0 20px 20px',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                      lineHeight: '23px',
                      '@media(max-width: 425px)': {
                        fontSize: '15px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '13px',
                      },
                    }}
                    color="initial"
                  >
                    {items[4]?.paragraph || ''}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'relative',
                height: 'auto',
                width: 'auto',
                '@media(min-width: 425px) and (max-width: 980px)': {
                  mx: 'auto',
                  width: '401px',
                },
                '@media(min-width: 280px) and (max-width: 424px)': {
                  mx: 'auto',
                  width: 'auto',
                },
              }}
            >
              <Box
                component={'img'}
                src={items[5]?.end_point || ''}
                sx={{
                  width: 'auto',
                  height: 'auto',
                  mx: 'auto',
                  position: 'absolute',
                  bottom: -57,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                  '@media(min-width: 280px) and (max-width: 980px)': {
                    left: '19%',
                  },
                  '@media(max-width: 425px)': {
                    bottom: -42,
                    left: '24%',
                    width: '35px',
                    height: '40px',
                  },
                }}
              />
              <Box
                sx={{
                  mx: 'auto',
                  maxWidth: '401px',
                  height: '224px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  background: '#fff',
                  boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                  position: 'relative',
                  zIndex: 1,
                  '@media(min-width: 980px)': {
                    mt: 6,
                  },
                  '@media(max-width: 425px)': {
                    mx: 1.2,
                    height: 'auto',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    height: '89.498px',
                    display: 'flex',
                    borderRadius: '20px 20px 0 0 ',
                    background: '#F7F8FB',
                    p: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    src={items[5]?.icon || ''}
                    alt={items[5]?.alt || ''}
                    sx={{
                      width: 42,
                      height: 42,
                      '@media(max-width: 425px)': {
                        width: 30,
                        height: 30,
                      },
                      '@media(max-width: 280px)': {
                        width: 25,
                        height: 25,
                      },
                    }}
                  />
                  <Typography
                    component={'h4'}
                    color="secondary"
                    sx={{
                      ml: 2,
                      color: '#001C63',
                      fontSize: '20px',
                      fontWeight: 600,
                      '@media(max-width: 425px)': {
                        fontSize: '18px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '16px',
                      },
                    }}
                  >
                    {items[5]?.title || ''}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: '10px 20px 20px 20px',
                    borderRadius: '0 0 20px 20px',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                      lineHeight: '23px',
                      '@media(max-width: 425px)': {
                        fontSize: '15px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '13px',
                      },
                    }}
                    color="initial"
                  >
                    {items[5]?.paragraph || ''}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box></>
  )
}

export default CustomSection;