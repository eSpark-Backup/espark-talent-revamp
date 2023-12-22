import React, { useState } from 'react';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Divider } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [submenuAnchor, setSubmenuAnchor] = useState({});
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState('');

  const pages = ['Our Company', 'Solutions', 'Resources', 'Partnership'];
  const router = useRouter();
  const submenuItems = {
    'Our Company': [
      {
        label: 'Why eSpark Talent',
        link: '/what-we-do',
        icon: '/whyeSpark.svg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        label: 'How it Works',
        link: '/how-it-works',
        icon: '/howItsWork.svg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ],
    Solutions: [
      {
        label: 'Enterprise',
        link: '/for-enterprise',
        icon: '/enterPrice.svg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        label: 'Start-Ups',
        link: '/for-startup',
        icon: '/startup.svg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ],
    Resources: [
      {
        label: 'Blogs',
        link: '/blogs',
        icon: '/blogs.svg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        label: 'eSparkWiki',
        link: '/wiki',
        icon: '/esparkWiki.svg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        label: 'Career',
        link: '/careers',
        icon: '/career.svg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ],
    Partnership: [
      {
        label: 'Partnership Program',
        link: '/partnership',
        icon: '/partnership.svg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ],
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSubmenuItemClicked = (menuItem) => {
    setSelectedMenuItem(menuItem);
    handleCloseUserMenu();
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
    setSubmenuAnchor((prev) => ({ ...prev, [page]: event.currentTarget }));
    setSelectedMenuItem(null);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ background: '#fff' }}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Image src={'/logo.png'} width={100} height={49} />
            <Box
              id="menuResponsive"
              sx={{
                display: { xs: 'flex', md: 'none' },
                order: { xs: 2, md: 1 },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
                sx={{
                  '&:hover': { background: 'none' },
                }}
              >
                <MenuIcon
                  sx={{ width: '50px', height: '50px', color: '#001C63' }}
                />
              </IconButton>
              {Boolean(anchorElNav) && (
                <Accordion
                  elevation={0}
                  expanded={expandedAccordion['nav']}
                  onChange={handleAccordionChange('nav')}
                  sx={{
                    position: 'absolute',
                    top: '79px',
                    zIndex: 1000,
                  }}
                >
                  {pages.map((page) => {
                    const hasSubmenu = submenuItems.hasOwnProperty(page);
                    return (
                      <Box key={page}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`${page}-content`}
                          id={`${page}-header`}
                          sx={{ width: '100%' }}
                        >
                          <Typography textAlign="center">{page}</Typography>
                        </AccordionSummary>
                        {hasSubmenu && (
                          <AccordionDetails>
                            {submenuItems[page].map((submenuItem, subIndex) => (
                              <MenuItem
                                key={submenuItem.label}
                                onMouseDown={() =>
                                  handleSubmenuItemClicked(submenuItem)
                                }
                                sx={{
                                  width: '100%',
                                  paddingLeft: '20px',
                                }}
                              >
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingRight: 19,
                                  }}
                                >
                                  <Image
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
                                      {submenuItem.label}
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
                            ))}
                          </AccordionDetails>
                        )}
                      </Box>
                    );
                  })}
                </Accordion>
              )}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                ml: { lg: '46px' },
              }}
            >
              {pages.map((page, index) => (
                <Box key={page}>
                  <Button
                    onClick={(event) => handleOpenUserMenu(event, page)}
                    sx={{
                      my: 2,
                      mx: 2,
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
                    {page}
                    <Image
                      src={'/arrow.svg'}
                      width={13}
                      height={7}
                      alt="arrow"
                      style={{ marginLeft: '5px' }}
                    />
                  </Button>
                  <Menu
                    sx={{ mt: '17px' }}
                    anchorEl={submenuAnchor[page]}
                    open={Boolean(submenuAnchor[page])}
                    onClose={() => handleCloseUserMenu(page)}
                  >
                    {submenuItems[page].map((submenuItem, subIndex) => (
                      <Box key={submenuItem.label}>
                        <MenuItem
                          key={submenuItem.label}
                          onClick={() => handleSubmenuItemClicked(submenuItem)}
                          sx={{
                            width: '341px',
                            height: '105px',
                            padding: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              paddingRight: 19,
                            }}
                          >
                            <Image
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
                                {submenuItem.label}
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
                        {subIndex < submenuItems[page].length - 1 && (
                          <Divider sx={{ mx: '20%' }} />
                        )}
                      </Box>
                    ))}
                  </Menu>
                  {index < pages.length - 1 && <Divider />}
                </Box>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleOpenUserMenu}
                size="small"
                sx={{
                  border: '1.145px solid #222',
                  borderRadius: '5.727px',
                  '&:hover': {
                    background: '#029894',
                    color: '#fff',
                    border: '1.145px solid #029894',
                  },
                  color: '#222',
                  textAlign: 'center',
                  fontSize: '17.766px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '27.49px',
                  padding: '11px 20px 9px 20px',
                  alignItems: 'center',
                }}
              >
                Hire a Talent
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
