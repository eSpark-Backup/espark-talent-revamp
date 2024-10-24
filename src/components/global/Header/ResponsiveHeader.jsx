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
import {
  responsiveHeaderStyle,
  menuIconStyle,
  accordionStyle,
  accordionSummaryStyle,
  typographyStyle,
  expandMoreIconStyle,
  accordionDetailsStyle,
  menuItemStyle,
  imageStyle,
  boxStyle,
  subtitle1Style,
  body2Style,
  buttonStyle,
} from '@/constants/global/header/Responsiveheader';

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
      sx={responsiveHeaderStyle}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="primary"
        sx={menuIconStyle}
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
                  expanded={
                    page === 'Pricing' ? false : expandedAccordion[page]
                  }
                  onChange={handleAccordionChange(page)}
                  sx={accordionStyle}
                >
                  <AccordionSummary
                    expandIcon={
                      page === 'Pricing' ? null : (
                        <ExpandMoreIcon sx={expandMoreIconStyle} />
                      )
                    }
                    aria-controls={`${page}-content`}
                    id={`${page}-header`}
                    sx={accordionSummaryStyle}
                  >
                    <Box
                      component={'div'}
                      onClick={() => {
                        if (page === 'Pricing') {
                          window.open('/pricing', '_self');
                        } else {
                          null;
                        }
                      }}
                    >
                      <Typography textAlign="center" sx={typographyStyle}>
                        {page}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  {hasSubmenu && (
                    <AccordionDetails sx={accordionDetailsStyle}>
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
                              <Box sx={menuItemStyle}>
                                <Image
                                  quality="85"
                                  priority={true}
                                  src={submenuItem?.icon}
                                  width={30}
                                  height={30}
                                  alt="icon"
                                  style={imageStyle}
                                />
                                <Box sx={boxStyle}>
                                  <Typography
                                    variant="subtitle1"
                                    sx={subtitle1Style}
                                  >
                                    {submenuItem?.label}
                                  </Typography>
                                  <Typography variant="body2" sx={body2Style}>
                                    {submenuItem?.description}
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
                  sx={accordionStyle}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={expandMoreIconStyle} />}
                    aria-controls={`${page}-content`}
                    id={`${page}-header`}
                    sx={accordionSummaryStyle}
                  >
                    <Typography textAlign="center" sx={typographyStyle}>
                      {page}
                    </Typography>
                  </AccordionSummary>
                  {hasSubmenu && (
                    <AccordionDetails sx={accordionDetailsStyle}>
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
                              <Box sx={menuItemStyle}>
                                <Image
                                  quality="85"
                                  priority={true}
                                  src={submenuItem?.icon}
                                  width={30}
                                  height={30}
                                  alt="icon"
                                  style={imageStyle}
                                />
                                <Box sx={boxStyle}>
                                  <Typography
                                    variant="subtitle1"
                                    sx={subtitle1Style}
                                  >
                                    {submenuItem?.label}
                                  </Typography>
                                  <Typography variant="body2" sx={body2Style}>
                                    {submenuItem?.description}
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
              sx={buttonStyle}
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
