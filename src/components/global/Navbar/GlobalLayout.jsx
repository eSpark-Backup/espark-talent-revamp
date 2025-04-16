'use client';

import { Box, Button, IconButton } from '@mui/material';
import DefaultNavbarMobile from '@/components/global/navbar/DefaultNavbarMobile';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

const GlobalLayout = ({
  relative,
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
  globalLayoutStyle,
}) => {
  const {
    mainBoxStyle,
    innerBoxStyle,
    navbarItemBoxStyle,
    linkBoxStyle,
    linkStyle,
    ulStyle,
    buttonBoxStyle,
    buttonStyle,
    endIconStyle,
    navBarIconButtonBoxStyle,
    iconButtonStyle,
    closeIconStyle,
    menuIconStyle,
  } = globalLayoutStyle || {};

  return (
    <>
      <Box sx={mainBoxStyle(relative, sticky)}>
        <Box sx={innerBoxStyle}>
          <Box sx={navbarItemBoxStyle}>
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
              <Button
                disableRipple
                sx={buttonStyle}
                onClick={() => window?.open(action?.route || '#', '_blank')}
                endIcon={
                  <Box sx={endIconStyle}>
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
    </>
  );
};

export default GlobalLayout;
