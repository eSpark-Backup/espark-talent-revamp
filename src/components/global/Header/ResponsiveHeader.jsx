'use client';
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  MenuItem,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  BOOK_A_DEMO,
  HIRE_A_TALENT_LINK,
  PAGES,
  REMOTE_PAGES,
  SUBMENU_ITEMS,
} from '@/constants/global/header';
import HireTalentResponsiveButton from './HireTalentResponsiveButton';
import HireLinks from '@/components/homepage/HireLinks';
import { HIRE_A_TALENT_MENU } from '@/constants/homepage';
import { usePathname } from 'next/navigation';

const ResponsiveHeader = ({
  handleAccordionChange,
  handleOpenNavMenu,
  anchorElNav,
  expandedAccordion,
  handleSubmenuItemClicked,
  handleOpenUserMenu,
  handleCloseNavMenu,
}) => {
  const pathName = usePathname();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (anchorElNav && !anchorElNav.contains(event.target)) {
        handleCloseNavMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [anchorElNav, handleCloseNavMenu]);

  return (
    <Box
      id="menuResponsive"
      className="responsiveNav"
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
        <MenuIcon sx={{ width: '50px', height: '50px', color: '#001C63' }} />
      </IconButton>

      {Boolean(anchorElNav) && (
        <Box
          sx={{
            position: 'absolute',
            top: '76px',
            zIndex: 1000,
            px: 0.5,
            ml: '4%',
            width: '92%',
            left: 0,
            backgroundColor: '#fff',
            borderTop: 'none !important',
            pb: 2,
          }}
        >
          {!pathName?.includes('hire-remote-developers') &&
            PAGES?.map((page, index) => {
              const hasSubmenu = Object.prototype.hasOwnProperty.call(
                SUBMENU_ITEMS,
                page
              );
              return (
                <Accordion
                  key={index}
                  expanded={expandedAccordion[page]}
                  onChange={handleAccordionChange(page)}
                  sx={{
                    boxShadow: 'none !important',
                    backgroundColor: 'none !important',
                    width: '100%',
                    border: 0,
                    '.mui-bsh1p3-MuiPaper-root-MuiAccordion-root:before': {
                      boxShadow: 'none !important',
                      backgroundColor: 'transparent !important',
                      left: 0,
                      border: 0,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon sx={{ color: '#222 !important' }} />
                    }
                    aria-controls={`${page}-content`}
                    id={`${page}-header`}
                    sx={{
                      backgroundColor: 'red #fff ',
                      boxShadow: 'none',
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        color: '#222',
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '21px',
                      }}
                    >
                      {page}
                    </Typography>
                  </AccordionSummary>
                  {hasSubmenu && (
                    <AccordionDetails
                      sx={{ backgroundColor: '#fff !important ' }}
                    >
                      {page === 'Hire A Talent' ? (
                        <HireLinks data={HIRE_A_TALENT_MENU} />
                      ) : (
                        <>
                          {SUBMENU_ITEMS[page]?.map((submenuItem, index) => (
                            <MenuItem
                              key={index}
                              onClick={() =>
                                handleSubmenuItemClicked(submenuItem)
                              }
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
                                  style={{ marginRight: '2px' }}
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
                                      whiteSpace: 'normal',
                                    }}
                                  >
                                    {submenuItem.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </MenuItem>
                          ))}
                        </>
                      )}
                    </AccordionDetails>
                  )}
                </Accordion>
              );
            })}

          {pathName?.includes('hire-remote-developers') &&
            REMOTE_PAGES?.map((page, index) => {
              const hasSubmenu = Object.prototype.hasOwnProperty.call(
                SUBMENU_ITEMS,
                page
              );
              return (
                <Accordion
                  key={index}
                  expanded={expandedAccordion[page]}
                  onChange={handleAccordionChange(page)}
                  sx={{
                    boxShadow: 'none !important',
                    backgroundColor: 'none !important',
                    width: '100%',
                    border: 0,
                    '.mui-bsh1p3-MuiPaper-root-MuiAccordion-root:before': {
                      boxShadow: 'none !important',
                      backgroundColor: 'transparent !important',
                      left: 0,
                      border: 0,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon sx={{ color: '#222 !important' }} />
                    }
                    aria-controls={`${page}-content`}
                    id={`${page}-header`}
                    sx={{
                      backgroundColor: 'red #fff ',
                      boxShadow: 'none',
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        color: '#222',
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '21px',
                      }}
                    >
                      {page}
                    </Typography>
                  </AccordionSummary>
                  {hasSubmenu && (
                    <AccordionDetails
                      sx={{ backgroundColor: '#fff !important ' }}
                    >
                      {page === 'Hire A Talent' ? (
                        <HireLinks data={HIRE_A_TALENT_MENU} />
                      ) : (
                        <>
                          {SUBMENU_ITEMS[page]?.map((submenuItem, index) => (
                            <MenuItem
                              key={index}
                              onClick={() =>
                                handleSubmenuItemClicked(submenuItem)
                              }
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
                                  style={{ marginRight: '2px' }}
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
                                      whiteSpace: 'normal',
                                    }}
                                  >
                                    {submenuItem.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </MenuItem>
                          ))}
                        </>
                      )}
                    </AccordionDetails>
                  )}
                </Accordion>
              );
            })}

          {pathName?.includes('hire-remote-developers') ? (
            <Button
              disableRipple
              onClick={() => window?.open(HIRE_A_TALENT_LINK || '#', '_blank')}
              sx={{
                ml: 1.7,
                mt: 0.5,
                width: { xs: '170px', md: '180px', lg: '223px' },
                height: { xs: '44px', md: '46px', lg: '48px' },
                backgroundColor: '#101828',
                borderRadius: '100px',
                color: '#fff',
                fontSize: '20px',
                '&:hover': {
                  backgroundColor: '#101828',
                  color: '#fff',
                },
              }}
            >
              {BOOK_A_DEMO || ''}
            </Button>
          ) : (
            <HireTalentResponsiveButton
              handleOpenUserMenu={handleOpenUserMenu}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default ResponsiveHeader;
