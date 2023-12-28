import React, { useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from 'next/navigation';
import DesktopHeader from './desktopHeader';
import Container from '@mui/material/Container';

import HireTalentButton from './HireTalentButton';
import ResponsiveHeader from './ResponsiveHeader';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [submenuAnchor, setSubmenuAnchor] = useState({});
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState('');

  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
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
    setAnchorElUser(null);
    setSubmenuAnchor((prev) => ({ ...prev, [page]: null }));
  };
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : '');
  };

  const handleOpenUserMenu = (event, page) => {
    setAnchorElUser(event.currentTarget);
    setSubmenuAnchor({ ...submenuAnchor, [page]: event.currentTarget });
    setSelectedMenuItem(null);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ background: '#fff' }}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Image
              src={'/images/header/logo.png'}
              width={100}
              height={49}
              alt="logo"
            />
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
            <HireTalentButton
              handleOpenUserMenu={handleOpenUserMenu}
              display={{ xs: 'none', md: 'flex' }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
