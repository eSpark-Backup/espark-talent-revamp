'use client';

import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Menu from '@mui/material/Menu';
import { Box } from '@mui/material';
import NavbarItems from '@/components/global/navbar/NavbarItems';
import NavbarItemsMobile from '@/components/global/navbar/NavbarItemsMobile';
import Fade from '@mui/material/Fade';
import { NAVBAR_STYLE } from './DefaultNavbarStyles';

const DefaultNavbarMobile = ({ routes, open, mobileMenu, handleClose }) => {
  const [collapse, setCollapse] = useState('');
  const { navbarItemStyle, mobileNavbarStyle } = NAVBAR_STYLE || {};
  const {
    mainBoxStyle,
    nameStyle,
    linkStyle,
    nameAndDescriptionBoxStyle,
    iconBoxStyle,
    iconStyle,
    nameLinkStlyle,
    collapseNameStyle,
    collapseDescriptionStyle,
    menuStyle,
    menuPaperPropStyle,
    collapseStyle,
  } = mobileNavbarStyle || {};

  /**
   * Toggles the collapse state for a given menu or section.
   *
   * @param {string} name - The name of the menu or section to toggle.
   * If the current collapse state matches the provided name, it will be set to `false`.
   * Otherwise, it will set the collapse state to the provided name.
   */
  const handleSetCollapse = (name) =>
    collapse === name ? setCollapse(false) : setCollapse(name);

  const renderNavbarItems = routes?.map(
    (
      {
        name,
        icon,
        collapse: routeCollapses,
        href,
        route,
        collapse: navCollapse,
      },
      index
    ) => (
      <NavbarItems
        key={name}
        name={name}
        icon={icon}
        handleClose={handleClose}
        collapseStatus={name === collapse}
        onClick={() => handleSetCollapse(name)}
        href={href}
        route={route}
        routes={routes}
        index={index}
        collapse={Boolean(navCollapse)}
        dropdownName={collapse}
        navbarItemStyle={navbarItemStyle}
      >
        <Box sx={mainBoxStyle}>
          {routeCollapses &&
            routeCollapses?.map((item, routeIndex) => (
              <NavbarItemsMobile
                item={item}
                key={routeIndex}
                handleClose={handleClose}
                nameStyle={nameStyle}
                linkStyle={linkStyle}
                nameAndDescriptionBoxStyle={nameAndDescriptionBoxStyle}
                iconBoxStyle={iconBoxStyle}
                iconStyle={iconStyle}
                nameLinkStlyle={nameLinkStlyle}
                collapseNameStyle={collapseNameStyle}
                collapseDescriptionStyle={collapseDescriptionStyle}
              />
            ))}
        </Box>
      </NavbarItems>
    )
  );

  return (
    <>
      {mobileMenu && (
        <Menu
          id="basic-menu"
          anchorEl={mobileMenu}
          open={open}
          onClose={handleClose}
          disableScrollLock={true}
          TransitionComponent={Fade}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={menuStyle}
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          PaperProps={{
            sx: menuPaperPropStyle,
          }}
        >
          <Collapse
            sx={collapseStyle}
            in={Boolean(open) || false}
            timeout={50}
            unmountOnExit
          >
            <Box width="calc(100% + 1?.625rem)" my={0} ml={-2}>
              {renderNavbarItems}
            </Box>
          </Collapse>
        </Menu>
      )}
    </>
  );
};

export default DefaultNavbarMobile;
