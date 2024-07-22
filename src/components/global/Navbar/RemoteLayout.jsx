'use client';
import React, { useEffect, useState } from 'react';
import { Box, Button, Fade, IconButton } from '@mui/material';
import DefaultNavbarMobile from './DefaultNavbarMobile';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const RemoteLayout = ({
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
  const [scroll, setScroll] = useState(
    typeof window !== 'undefined' ? 0 : window.scrollY
  );

  useEffect(() => {
    function boxShadow() {
      setScroll(window.scrollY);
    }
    window.addEventListener('scroll', boxShadow);
    boxShadow();
    return () => window.removeEventListener('scroll', boxShadow);
  }, []);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        px={{ xs: 2, sm: 2, md: 3, lg: 2 }}
        // p={1}
        sx={{
          position: relative ? 'relative' : sticky ? 'sticky' : 'static',
          top: sticky ? 0 : 'unset',
          zIndex: sticky ? 1100 : 'unset',
          height: '80px',
          backgroundColor: scroll > 0 ? '#fff' : '#edf8f7',
          boxShadow: scroll > 0 ? '0px 4px 4px 0px #00000040' : 'none',
          transition:
            'box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
          '@media(max-width: 1023px)': {
            backgroundColor: '#fff',
            boxShadow: '0px 4px 4px 0px #00000040',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mx: 'auto',
            justifyContent: 'space-between',
            maxWidth: { md: '900px', lg: '1150px' },
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <Box
              component={Link}
              href="/"
              display="flex"
              alignItems="center"
              sx={{
                width: { xs: '80px', md: '100px', lg: '115px', xl: '128px' },
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
                mr: 10,
                display: 'none',
                '@media(min-width: 1024px)': {
                  display: 'inline-block',
                },
              }}
            >
              <Button
                disableRipple
                onClick={() => window?.open(action?.route || '#', '_blank')}
                sx={{ ...action?.style }}
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
            <IconButton
              disableRipple
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            >
              {mobileMenu ? (
                <Fade in={mobileMenu} timeout={100} unmountOnExit>
                  <CloseIcon
                    sx={{ width: '25px', height: '25px', color: '#001C63' }}
                  />
                </Fade>
              ) : (
                <MenuIcon
                  sx={{ width: '30px', height: '30px', color: '#001C63' }}
                />
              )}
            </IconButton>
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

export default RemoteLayout;
