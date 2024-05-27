'use client';

import {
  Box,
  Button,
  Divider,
  MenuItem,
  Popper,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import DesktopHeader from '../global/Header/DesktopHeader';
import {
  BOOK_A_DEMO,
  HIRE_A_TALENT_LINK,
  REMOTE_PAGES,
} from '@/constants/global/header';
import { SUBMENU_ITEMS } from '@/constants/global/header';
import HireLinks from '@/components/homepage/HireLinks';
import { HIRE_A_TALENT_MENU } from '@/constants/homepage';
import Image from 'next/image';
import ResponsiveHeader from '../global/Header/ResponsiveHeader';

const HireRemoteNavbar = () => {
  // existing header work
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [submenuAnchor, setSubmenuAnchor] = useState({});
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState('');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState('');
  const [isHovered, setIsHovered] = React.useState(false);
  const notificationPopupRef = React.useRef(null);
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget || null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSubmenuItemClicked = (menuItem) => {
    setSelectedMenuItem(menuItem);
    handleCloseNavMenu();
    router.push(menuItem.link);
  };

  const handleCloseUserMenu = (page) => {
    console.log(page, 'page');
    setSelectedMenuItem(null);
    setAnchorElUser(null);
    setSubmenuAnchor((prev) => ({ ...prev, [page]: null }));
  };
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : '');
  };

  const handleOpenUserMenu = (event, page) => {
    console.log(event.currentTarget, 'event');
    console.log(page, 'page');
    setAnchorElUser(event.currentTarget);
    setSubmenuAnchor({ ...submenuAnchor, [page]: event.currentTarget });
    setSelectedMenuItem(null);
  };
  //

  // existing desktop header work

  const handleClick = (event, page) => {
    setAnchorEl(event?.currentTarget);
    setCurrentPage(page);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleSubmenuItemClickedAndClose = (submenuItem, page) => {
    handleCloseUserMenu(page);
    setAnchorEl(null);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      if (!isHovered) {
        setAnchorEl(null);
      }
    }, 50);
  };

  React.useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        setAnchorEl(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: { md: '83px', lg: '93px' },
          position: 'relative',
          backgroundColor: '#02989412',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            maxWidth: '1150px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pl: { xs: 3, sm: 4, md: 8, lg: 0 },
            pr: { xs: 1.5, sm: 3, md: 8, lg: 9 },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Box>
              <Link href={'/'}>
                <Box
                  component={'img'}
                  src="/images/header/logo.png"
                  alt={'logo'}
                  sx={{
                    width: { xs: '90px', md: '100px', lg: 'auto' },
                    height: 'auto',
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                display: 'none',
                alignItems: 'center',
                '@media(min-width: 988px)': {
                  display: 'flex',
                },
              }}
            >
              {REMOTE_PAGES?.map((page, index) => (
                <Box key={index}>
                  <Button
                    sx={{
                      my: 2,
                      mx: { md: 0.5, lg: 1 },
                      color: '#222',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '21.766px',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': { background: 'none' },
                    }}
                  >
                    <Box
                      sx={{ display: 'flex', alignItems: 'center' }}
                      onMouseEnter={(event) => {
                        handleClick(event, page);
                        handleMouseEnter();
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Typography
                        aria-describedby={id}
                        sx={{
                          color: '#222',
                          fontSize: { xs: '16px', lg: '18px' },
                          fontStyle: 'normal',
                          fontWeight: 600,
                          lineHeight: '21.766px',
                        }}
                      >
                        {page}
                      </Typography>
                      <Image
                        quality="85"
                        priority={true}
                        src={'/images/header/arrow.svg'}
                        width={13}
                        height={7}
                        alt="arrow"
                        style={{ marginLeft: '10px' }}
                      />
                    </Box>
                  </Button>
                  <Popper
                    id={id}
                    open={open}
                    ref={notificationPopupRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    anchorEl={anchorEl}
                    placement={
                      currentPage?.includes('Hire A Talent')
                        ? 'bottom'
                        : 'bottom-start'
                    }
                    sx={{
                      zIndex: 1005,
                      mx: 'auto',
                      '@media (min-width:1500px)': {
                        px: 1,
                        width: currentPage?.includes('Hire A Talent')
                          ? '100%'
                          : 'auto',
                      },
                      '@media (max-width:1499px)': {
                        px: currentPage?.includes('Hire A Talent') ? 1 : 0,
                        width: currentPage?.includes('Hire A Talent')
                          ? '100%'
                          : 'auto',
                      },
                      height: 'auto',
                    }}
                  >
                    {currentPage?.includes('Hire A Talent') ? (
                      <HireLinks
                        data={HIRE_A_TALENT_MENU}
                        currentPage={currentPage}
                      />
                    ) : (
                      <Box
                        sx={{
                          bgcolor: 'background.paper',
                          boxShadow: 'rgba(0, 0, 0, 0.10) 0px 5px 8px',
                          borderRadius: '10px',
                          mt: { lg: '30px', md: '30px' },
                        }}
                      >
                        {SUBMENU_ITEMS[currentPage]?.map(
                          (submenuItem, subIndex) => (
                            <Box key={subIndex}>
                              <Link href={submenuItem.link}>
                                <MenuItem
                                  onClick={() =>
                                    handleSubmenuItemClickedAndClose(
                                      submenuItem,
                                      page
                                    )
                                  }
                                  sx={{
                                    width: '341px',
                                    height: 'auto',
                                    padding: 2,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <Image
                                      quality="85"
                                      priority={true}
                                      src={submenuItem.icon}
                                      width={30}
                                      height={30}
                                      alt="icon"
                                      style={{ marginRight: '10px' }}
                                    />
                                    <Box sx={{ mx: 2 }}>
                                      <Typography
                                        variant="subtitle1"
                                        sx={{
                                          color: '#222',
                                          fontSize: '17.566px',
                                          fontWeight: 600,
                                          lineHeight: '17px',
                                          mb: 1,
                                        }}
                                      >
                                        {submenuItem?.label}
                                      </Typography>
                                      <Typography
                                        variant="body2"
                                        sx={{
                                          color: '#000',
                                          fontSize: '12px',
                                          fontWeight: 400,
                                          lineHeight: '16px',
                                          width: '240px',
                                          whiteSpace: 'normal',
                                        }}
                                      >
                                        {submenuItem.description}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </MenuItem>
                              </Link>
                              {subIndex <
                                SUBMENU_ITEMS[currentPage].length - 1 && (
                                <Divider sx={{ mx: '20%' }} />
                              )}
                            </Box>
                          )
                        )}
                      </Box>
                    )}
                  </Popper>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Button
              disableRipple
              onClick={() => window?.open(HIRE_A_TALENT_LINK || '#', '_blank')}
              sx={{
                display: 'none',
                '@media(min-width: 988px)': {
                  display: 'block',
                },
                width: { xs: '150px', md: '180px', lg: '223px' },
                height: { xs: '44px', md: '46px', lg: '48px' },
                backgroundColor: '#101828',
                borderRadius: '100px',
                color: '#fff',
                fontSize: '20px',
                '&:hover': {
                  backgroundColor: '#1c4e72',
                  color: '#fff',
                },
              }}
            >
              {BOOK_A_DEMO || ''}
            </Button>
            <ResponsiveHeader
              anchorElUser={anchorElUser}
              selectedMenuItem={selectedMenuItem}
              handleAccordionChange={handleAccordionChange}
              handleOpenNavMenu={handleOpenNavMenu}
              anchorElNav={anchorElNav}
              expandedAccordion={expandedAccordion}
              handleSubmenuItemClicked={handleSubmenuItemClicked}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HireRemoteNavbar;
