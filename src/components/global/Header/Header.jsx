import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from 'next/navigation';

import HireTalentButton from '@/components/global/Header/HireTalentButton.jsx';
import DesktopHeader from '@/components/global/Header/DesktopHeader.jsx';
import ResponsiveHeader from '@/components/global/Header/ResponsiveHeader.jsx';

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
      <Box backgroundColor={'#029894'} >
        <Typography color={'#fff'} variant='body1' textAlign={'center'}> Scale up your business with our exclusive offer!  Start with No Management Fee for First Employee. 🚀</Typography>
      </Box>
      <AppBar position="static" sx={{ background: '#fff' }}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Link href={'/'}>
              <Image
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
