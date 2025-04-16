'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import { Box } from '@mui/material';
import DropItems from '@/components/global/navbar/DropItems';
import HireLinks from '@/components/homepage/HireLinks';
import { HIRE_A_TALENT_MENU } from '@/constants/new-home/homepage';
import GlobalLayout from '@/components/global/navbar/GlobalLayout';
import RemoteLayout from '@/components/global/navbar/RemoteLayout';
import { NAVBAR_STYLE } from '@/constants/global/header';
import NavbarItems from '@/components/global/navbar/NavbarItems';
import { growInnerBoxStyle } from '@/components/global/navbar/DefaultNavbarStyles';

function DefaultNavbar({
  routes,
  handleOpen,
  light = false,
  action = false,
  sticky = false,
  relative = false,
  layout,
}) {
  const [dropdown, setDropdown] = useState('');
  const [dropdownEl, setDropdownEl] = useState('');
  const [dropdownName, setDropdownName] = useState('');
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(null);
  const mobileNavbarRef = useRef(null);
  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);
  const {
    popperStyle,
    growStyle,
    growBoxStyle,
    navbarItemStyle,
    dropdownItemsStyle,
    hireLinkStyle,
    remoteLayoutStyle,
    globalLayoutStyle,
  } = NAVBAR_STYLE || {};

  useEffect(() => {
    const resetMobileNavbar = () => {
      setMobileMenu(null);
      setDropdown(null);
      setDropdownEl(null);
    };
    window?.addEventListener('resize', resetMobileNavbar);
    window?.addEventListener('scroll', resetMobileNavbar);
    resetMobileNavbar();
    return () => {
      window?.removeEventListener('scroll', resetMobileNavbar);
      window?.removeEventListener('resize', resetMobileNavbar);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavbarRef?.current &&
        !mobileNavbarRef?.current?.contains(event?.target)
      ) {
        setMobileNavbar(false);
      }
    };
    document?.addEventListener('click', handleClickOutside);
    return () => {
      document?.removeEventListener('click', handleClickOutside);
    };
  }, [mobileNavbar]);

  const open = Boolean(mobileMenu);

  const handleClick = (event) => {
    if (mobileMenu) {
      setMobileMenu(null);
    } else {
      setMobileMenu(event?.currentTarget);
    }
  };

  const handleClose = () => {
    setMobileMenu(null);
  };

  /**
   * Toggles the dropdown menu by setting the current target element,
   * dropdown element, and dropdown name.
   *
   * @param {EventTarget} currentTarget - The current target element triggering the dropdown.
   * @param {string} name - The name of the dropdown to be toggled.
   */
  const toggleDropdown = (currentTarget, name) => {
    setDropdown(currentTarget);
    setDropdownEl(currentTarget);
    setDropdownName(name);
  };

  const renderNavbarItems = routes?.map(
    ({ name, icon, href, route, collapse }) => (
      <NavbarItems
        key={name}
        name={name}
        icon={icon}
        href={href}
        route={route}
        handleClose={() => setMobileMenu(null)}
        collapse={Boolean(collapse)}
        onClick={({ currentTarget }) =>
          collapse && toggleDropdown(currentTarget, name)
        }
        onMouseEnter={({ currentTarget }) =>
          collapse && toggleDropdown(currentTarget, name)
        }
        onMouseLeave={() => setDropdown(null)}
        light={light}
        navbarItemStyle={navbarItemStyle}
      />
    )
  );

  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      open={Boolean(dropdown)}
      placement={dropdownName === 'Hire A Talent' ? 'bottom' : 'top-start'}
      transition
      sx={popperStyle(dropdownName)}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => setDropdown(null)}
    >
      {({ TransitionProps }) =>
        dropdown && (
          <Grow {...TransitionProps} sx={growStyle(dropdownName)}>
            <Box borderRadius="lg" sx={growInnerBoxStyle}>
              <Box borderRadius="lg" sx={growBoxStyle(dropdownName)}>
                {dropdownName === 'Hire A Talent' ? (
                  <HireLinks
                    data={HIRE_A_TALENT_MENU}
                    setDropdown={setDropdown}
                    styles={hireLinkStyle}
                  />
                ) : (
                  routes
                    ?.find(({ name }) => name === dropdownName)
                    ?.collapse?.map(
                      ({ name, icon, description, href }, index) => (
                        <DropItems
                          key={index}
                          name={name}
                          icon={icon}
                          description={description}
                          href={href}
                          index={index}
                          setDropdown={setDropdown}
                          dropdownItemsStyle={dropdownItemsStyle}
                        />
                      )
                    )
                )}
              </Box>
            </Box>
          </Grow>
        )
      }
    </Popper>
  );

  const renderedLayout = (layout) => {
    return layout ? (
      <RemoteLayout
        relative={relative}
        sticky={sticky}
        Link={Link}
        renderNavbarItems={renderNavbarItems}
        action={action}
        openMobileNavbar={openMobileNavbar}
        open={open}
        handleClick={handleClick}
        mobileMenu={mobileMenu}
        routes={routes}
        setMobileMenu={setMobileMenu}
        handleClose={handleClose}
        dropdownName={dropdownName}
        mobileNavbarRef={mobileNavbarRef}
        dropdownMenu={dropdownMenu}
        handleOpen={handleOpen}
        remoteLayoutStyle={remoteLayoutStyle}
      />
    ) : (
      <GlobalLayout
        relative={relative}
        sticky={sticky}
        Link={Link}
        renderNavbarItems={renderNavbarItems}
        action={action}
        openMobileNavbar={openMobileNavbar}
        open={open}
        handleClick={handleClick}
        mobileMenu={mobileMenu}
        routes={routes}
        setMobileMenu={setMobileMenu}
        handleClose={handleClose}
        dropdownName={dropdownName}
        mobileNavbarRef={mobileNavbarRef}
        dropdownMenu={dropdownMenu}
        globalLayoutStyle={globalLayoutStyle}
      />
    );
  };

  return <>{renderedLayout(layout)}</>;
}

export default DefaultNavbar;
