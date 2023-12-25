import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  MenuItem,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { PAGES, SUBMENU_ITEMS } from '@/constants/global/header';

const ResponsiveHeader = ({
  handleAccordionChange,
  handleOpenNavMenu,
  anchorElNav,
  expandedAccordion,
  handleSubmenuItemClicked,
}) => {
  return (
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
        <MenuIcon sx={{ width: '50px', height: '50px', color: '#001C63' }} />
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
          {PAGES.map((page) => {
            const hasSubmenu = SUBMENU_ITEMS.hasOwnProperty(page);
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
                    {SUBMENU_ITEMS[page]?.map((submenuItem, subIndex) => (
                      <MenuItem
                        key={submenuItem.label}
                        onClick={() => handleSubmenuItemClicked(submenuItem)}
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
  );
};

export default ResponsiveHeader;
