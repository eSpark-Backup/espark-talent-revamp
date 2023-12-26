import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';

import { PAGES, SUBMENU_ITEMS } from '@/constants/global/header';
import { Button, Divider, Menu, MenuItem, Typography } from '@mui/material';

const DesktopHeader = ({
  submenuAnchor,
  handleOpenUserMenu,
  handleCloseUserMenu,
  handleSubmenuItemClicked,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        ml: { lg: '46px' },
      }}
    >
      {PAGES?.map((page, index) => (
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
              src={'/images/header/arrow.svg'}
              width={13}
              height={7}
              alt="arrow"
              style={{ marginLeft: '2px', }}
            />
          </Button>
          <Menu
            sx={{ mt: '17px' }}
            anchorEl={submenuAnchor[page]}
            open={Boolean(submenuAnchor[page])}
            onClose={() => handleCloseUserMenu(page)}
          >
            {SUBMENU_ITEMS[page]?.map((submenuItem, subIndex) => (
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
                {subIndex < SUBMENU_ITEMS[page].length - 1 && (
                  <Divider sx={{ mx: '20%' }} />
                )}
              </Box>
            ))}
          </Menu>
          {index < PAGES.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  );
};

export default DesktopHeader;
