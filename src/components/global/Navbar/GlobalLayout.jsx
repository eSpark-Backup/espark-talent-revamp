'use client';
import { Box, Button, Fade } from '@mui/material';
import React from 'react';
import DefaultNavbarMobile from './DefaultNavbarMobile';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const GlobalLayout = ({
  relative,
  sticky,
  Link,
  center,
  renderNavbarItems,
  action,
  openMobileNavbar,
  open,
  handleClick,
  mobileMenu,
  routes,
  setMobileMenu,
  handleClose,
  dropdownName,
  mobileNavbarRef,
  dropdownMenu,
}) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        px={{ xs: 2, sm: 2, md: 2.5, lg: 2 }}
        sx={{
          position: relative ? 'relative' : sticky ? 'sticky' : 'static',
          top: sticky ? 0 : 'unset',
          zIndex: sticky ? 1100 : 'unset',
          height: '76px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid black',
          boxShadow: '0px 4px 22px 0px #00000016',

          '@media(min-width:1250px)': {
            height: '95px',
          },

          '@media(min-width:1024px) and (max-width:1249px)': {
            height: '88px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mx: 'auto',
            justifyContent: 'space-between',
            maxWidth: { md: '96%', lg: '1260px', xl: '1380px' },
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box
              component={Link}
              href="/"
              display="flex"
              alignItems="center"
              sx={{
                width: { xs: '70px', md: '90px' },
                '@media(min-width:1024px)': {
                  width: { md: '110px', lg: '115px', xl: '128px' },
                },
              }}
            >
              <Box component={'img'} src={'/images/header/logo.png'} />
            </Box>
            <Box
              component="ul"
              sx={{
                height: '100%',
                display: 'none',
                '@media(min-width: 1024px)': {
                  display: 'flex',
                  ml: 'auto',
                  listStyle: 'none',
                  alignItems: center,
                  m: 0,
                  p: 0,
                },
              }}
            >
              {renderNavbarItems}
            </Box>
          </Box>
          {action && (
            <Box
              sx={{
                display: 'none',
                '@media(min-width: 1024px)': {
                  display: 'inline-block',
                },
              }}
            >
              <Button
                disableRipple
                sx={{
                  ...action?.style,
                  '@media(min-width:1024px) and (max-width:1249px)': {
                    fontSize: '11px',
                    width: '180px',
                  },
                }}
                onClick={() => window?.open(action?.route || '#', '_blank')}
                endIcon={
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 0.5,
                      backgroundColor: '#175A59',
                      borderRadius: '100%',
                    }}
                  >
                    <Box
                      component={'img'}
                      src="/images/header/topbar/rc-right.png"
                    />
                  </Box>
                }
              >
                {action?.label || ''}
              </Button>
            </Box>
          )}

          <Box
            display="none"
            lineHeight={0}
            py={1.5}
            pl={1.5}
            sx={{
              cursor: 'pointer',
              '@media(max-width: 1023px)': {
                display: 'inline-block',
              },
            }}
            onClick={openMobileNavbar}
          >
            <Button
              disableRipple
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              {mobileMenu ? (
                <>
                  <Fade in={mobileMenu} timeout={100} unmountOnExit>
                    <CloseIcon
                      sx={{ width: '25px', height: '25px', color: '#001C63' }}
                    />
                  </Fade>
                </>
              ) : (
                <>
                  <MenuIcon
                    sx={{ width: '30px', height: '30px', color: '#001C63' }}
                  />
                </>
              )}
            </Button>
          </Box>
        </Box>
      </Box>
      <DefaultNavbarMobile
        sticky={sticky}
        routes={routes}
        open={open}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        handleClick={handleClick}
        handleClose={handleClose}
        dropdownName={dropdownName}
        mobileNavbarRef={mobileNavbarRef}
      />
      {dropdownMenu}
    </>
  );
};

export default GlobalLayout;
