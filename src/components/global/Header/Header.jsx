'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { usePathname, useRouter } from 'next/navigation';

import DesktopHeader from '@/components/global/Header/DesktopHeader.jsx';
import ResponsiveHeader from '@/components/global/Header/ResponsiveHeader.jsx';
import {
  headerStyle,
  appBarStyle,
  toolBarStyle,
} from '@/constants/global/header/Header';

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
        pathName !== '/hire-a-frontend-developer' &&
        pathName !== '/hire-remote-developers' &&
        pathName !== '/book-a-demo-meeting' && (
          <Box sx={headerStyle}>
            <AppBar position="static" sx={appBarStyle}>
              <Container>
                <Toolbar disableGutters sx={toolBarStyle}>
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
