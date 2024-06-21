import React from 'react';
import Image from 'next/image';
import {
  Button,
  Typography,
  Box,
  Popper,
  MenuItem,
  Divider,
} from '@mui/material';

import { PAGES, SUBMENU_ITEMS } from '@/constants/global/header';
import HireTalentButton from './HireTalentButton';

import Link from 'next/link';
import HireLinks from '@/components/homepage/HireLinks';
import { HIRE_A_TALENT_MENU } from '@/constants/homepage';

const DesktopHeader = ({ handleOpenUserMenu, handleCloseUserMenu }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState('');
  const [isHovered, setIsHovered] = React.useState(false);
  const notificationPopupRef = React.useRef(null);

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
    }, 100);
  };

  React.useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        setAnchorEl(null);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box
        className="desktopNav"
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          ml: { md: '20px', lg: '30px' },
        }}
      >
        {PAGES?.map((page, index) => (
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
                sx={{ display: 'flex' }}
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
                    fontFamily: 'Titillium Web, sans-serif',
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
                  style={{ marginLeft: '2px' }}
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
                <HireLinks data={HIRE_A_TALENT_MENU} />
              ) : (
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 'rgba(0, 0, 0, 0.10) 0px 5px 8px',
                    borderRadius: '10px',
                    mt: { lg: '30px', md: '30px' },
                  }}
                >
                  {SUBMENU_ITEMS[currentPage]?.map((submenuItem, subIndex) => (
                    <Box key={subIndex}>
                      <Link href={submenuItem.link}>
                        <MenuItem
                          onClick={() =>
                            handleSubmenuItemClickedAndClose(submenuItem, page)
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
                      {subIndex < SUBMENU_ITEMS[currentPage].length - 1 && (
                        <Divider sx={{ mx: '20%' }} />
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Popper>
          </Box>
        ))}
      </Box>
      <Box>
        <HireTalentButton handleOpenUserMenu={handleOpenUserMenu} />
      </Box>
    </Box>
  );
};

export default DesktopHeader;
