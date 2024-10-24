import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Button,
  Typography,
  Box,
  Popper,
  MenuItem,
  Divider,
} from '@mui/material';
import HireTalentButton from './HireTalentButton';
import HireLinks from '@/components/homepage/HireLinks';
import { HIRE_A_TALENT_MENU } from '@/constants/homepage';
import { PAGES, SUBMENU_ITEMS } from '@/constants/global/header';
import {
  boxStyle,
  desktopNavStyle,
  buttonStyle,
  typographyStyle,
  dividerStyle,
  buttonBoxStyle,
  popperBoxStyle,
  menuItemStyle,
  menuItemBoxStyle,
  subMenuItemStyle,
  subMenuItemDescriptionStyle,
  subMenuItemBoxStyle,
} from '@/constants/global/header/DesktopHeader';

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

  const popperStyle = {
    mx: 'auto',
    '@media (min-width:1500px)': {
      px: 1,
      width: currentPage?.includes('Hire A Talent') ? '100%' : 'auto',
    },
    '@media (max-width:1499px)': {
      px: currentPage?.includes('Hire A Talent') ? 1 : 0,
      width: currentPage?.includes('Hire A Talent') ? '100%' : 'auto',
    },
    height: 'auto',
  };
  const popperPlacement = currentPage?.includes('Hire A Talent')
    ? 'bottom'
    : 'bottom-start';

  return (
    <Box sx={boxStyle}>
      <Box className="desktopNav" sx={desktopNavStyle}>
        {PAGES?.map((page, index) => (
          <Box key={index}>
            <Button sx={buttonStyle}>
              <Box
                sx={buttonBoxStyle}
                onClick={() => {
                  if (page === 'Pricing') {
                    window.open('/pricing', '_self');
                  } else {
                    null;
                  }
                }}
                onMouseEnter={(event) => {
                  handleClick(event, page);
                  handleMouseEnter();
                }}
                onMouseLeave={handleMouseLeave}
              >
                <Typography aria-describedby={id} sx={typographyStyle}>
                  {page}
                </Typography>
                {page !== 'Pricing' && (
                  <Image
                    quality="85"
                    priority={true}
                    src={'/images/header/arrow.svg'}
                    width={13}
                    height={7}
                    alt="arrow"
                    style={{ marginLeft: '2px' }}
                  />
                )}
              </Box>
            </Button>
            <Popper
              id={id}
              open={currentPage === 'Pricing' ? null : open}
              ref={notificationPopupRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              anchorEl={anchorEl}
              placement={popperPlacement}
              sx={popperStyle}
            >
              {currentPage?.includes('Hire A Talent') ? (
                <HireLinks data={HIRE_A_TALENT_MENU} />
              ) : (
                <Box sx={popperBoxStyle}>
                  {SUBMENU_ITEMS[currentPage]?.map((submenuItem, subIndex) => (
                    <Box key={subIndex}>
                      <Link href={submenuItem?.link}>
                        <MenuItem
                          onClick={() =>
                            handleSubmenuItemClickedAndClose(submenuItem, page)
                          }
                          sx={menuItemStyle}
                        >
                          <Box sx={menuItemBoxStyle}>
                            <Image
                              quality="85"
                              priority={true}
                              src={submenuItem?.icon}
                              width={30}
                              height={30}
                              alt="icon"
                              style={{ marginRight: '10px' }}
                            />
                            <Box sx={subMenuItemBoxStyle}>
                              <Typography
                                variant="subtitle1"
                                sx={subMenuItemStyle}
                              >
                                {submenuItem?.label}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={subMenuItemDescriptionStyle}
                              >
                                {submenuItem?.description}
                              </Typography>
                            </Box>
                          </Box>
                        </MenuItem>
                      </Link>
                      {subIndex < SUBMENU_ITEMS[currentPage]?.length - 1 && (
                        <Divider sx={dividerStyle} />
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
