'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { usePathname, useRouter } from 'next/navigation';

import DesktopHeader from '@/components/global/Header/DesktopHeader.jsx';
import ResponsiveHeader from '@/components/global/Header/ResponsiveHeader.jsx';

const Header = () => {
  const pathName = usePathname();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [submenuAnchor, setSubmenuAnchor] = useState({});
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState('');

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

  return (
    <>
      {pathName !== '/book-a-demo' &&
        pathName !== '/demo' &&
        pathName !== '/thankyou' &&
        pathName !== '/book-a-meeting' &&
        pathName !== '/hire-a-frontend-developer' &&
        pathName !== '/hire-a-backend-developer' && (
          <Box
            sx={{
              background: '#F7F7F7',
            }}
          >
            <Box
              backgroundColor={'#029894'}
              sx={{
                height: { lg: '26px', md: '40px' },
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 999,
              }}
            >
              <Typography
                color={'#fff'}
                sx={{
                  fontSize: {
                    xs: '3px',
                    sm: '15px !important',
                  },
                  fontWeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                Scale up your business with our exclusive offer! Start with No
                Management Fee for First Employee.
                <Box
                  src="/images/homepage/rocket.svg"
                  sx={{ mx: 0.5, width: '16px', height: '100%' }}
                  component={'img'}
                />
              </Typography>
            </Box>
            <AppBar
              position="static"
              sx={{
                background: '#F7F7F7',
              }}
            >
              <Container>
                <Toolbar
                  disableGutters
                  sx={{ justifyContent: 'space-between' }}
                >
                  <Link href={'/'}>
                    <Image
                      quality="85"
                      priority={true}
                      src={'/images/header/logo.png'}
                      width={100}
                      height={49}
                      alt="logo"
                    />
                  </Link>
                  <ResponsiveHeader
                    handleAccordionChange={handleAccordionChange}
                    handleOpenNavMenu={handleOpenNavMenu}
                    anchorElNav={anchorElNav}
                    expandedAccordion={expandedAccordion}
                    handleSubmenuItemClicked={handleSubmenuItemClicked}
                    handleOpenUserMenu={handleOpenUserMenu}
                    handleCloseNavMenu={handleCloseNavMenu}
                  />

                  <DesktopHeader
                    submenuAnchor={submenuAnchor}
                    handleOpenUserMenu={handleOpenUserMenu}
                    handleSubmenuItemClicked={handleSubmenuItemClicked}
                    handleCloseUserMenu={handleCloseUserMenu}
                    anchorElUser={anchorElUser}
                    selectedMenuItem={selectedMenuItem}
                  />
                </Toolbar>
              </Container>
            </AppBar>
          </Box>
        )}
    </>
  );
};

export default Header;
