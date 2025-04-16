'use client';

import { useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import DefaultNavbarMobile from '@/components/global/navbar/DefaultNavbarMobile';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

const RemoteLayout = ({
  sticky,
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
  handleOpen,
  remoteLayoutStyle,
}) => {
  const {
    mainBoxStyle,
    innerBoxStyle,
    logoAndItemBoxStyle,
    linkBoxStyle,
    linkStyle,
    ulStyle,
    buttonBoxStyle,
    buttonStyle,
    navBarIconButtonBoxStyle,
    iconButtonStyle,
    closeIconStyle,
    menuIconStyle,
  } = remoteLayoutStyle || {};

  useEffect(() => {
    const elementId = document?.getElementById('navbar');

    /**
     * Handles the scroll event to toggle the 'is-sticky' class on an element
     * based on the vertical scroll position of the window.
     *
     * @function handleScroll
     * @description Adds the 'is-sticky' class to the specified element if the
     *              vertical scroll position exceeds 350 pixels, and removes it
     *              otherwise.
     */
    const handleScroll = () => {
      if (window?.scrollY > 350) {
        elementId?.classList?.add('is-sticky');
      } else {
        elementId?.classList?.remove('is-sticky');
      }
    };

    handleScroll();

    window?.addEventListener('scroll', handleScroll);
    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className="navbar-area">
      <Box
        className="navbar"
        display="flex"
        alignItems="center"
        sx={mainBoxStyle}
      >
        <Box sx={innerBoxStyle}>
          <Box sx={logoAndItemBoxStyle}>
            <Box sx={linkBoxStyle}>
              <Link href="/" style={linkStyle}>
                <Box component={'img'} src={'/images/header/logo.png'} />
              </Link>
            </Box>
            <Box component="ul" sx={ulStyle}>
              {renderNavbarItems}
            </Box>
          </Box>
          {action && (
            <Box sx={buttonBoxStyle}>
              <Button disableRipple sx={buttonStyle} onClick={handleOpen}>
                {action?.label || ''}
              </Button>
            </Box>
          )}
          <Box sx={navBarIconButtonBoxStyle} onClick={openMobileNavbar}>
            <IconButton
              disableRipple
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={iconButtonStyle}
            >
              {mobileMenu ? (
                <CloseIcon sx={closeIconStyle} />
              ) : (
                <MenuIcon sx={menuIconStyle} />
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
    </div>
  );
};

export default RemoteLayout;
