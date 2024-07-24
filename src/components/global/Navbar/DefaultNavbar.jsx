'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import { Box } from '@mui/material';
import DefaultNavbarDropdown from './DefaultNavbarDropdown';
import DropItems from './DropItems';
import HireLinks from '@/components/homepage/HireLinks';
import { HIRE_A_TALENT_MENU } from '@/constants/homepage';
import GlobalLayout from './GlobalLayout';
import RemoteLayout from './RemoteLayout';

function DefaultNavbar({
  routes,
  light = false,
  action = false,
  sticky = false,
  relative = false,
  center = false,
  layout,
}) {
  const [dropdown, setDropdown] = useState('');
  const [dropdownEl, setDropdownEl] = useState('');
  const [dropdownName, setDropdownName] = useState('');
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(null);
  const mobileNavbarRef = useRef(null);
  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    function displayMobileNavbar() {
      setMobileMenu(null);
      setDropdown(null);
      setDropdownEl(null);
    }

    window.addEventListener('resize', displayMobileNavbar);
    window.addEventListener('scroll', displayMobileNavbar);

    displayMobileNavbar();

    return () => {
      window.removeEventListener('scroll', displayMobileNavbar);
      window.removeEventListener('resize', displayMobileNavbar);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      mobileNavbarRef?.current &&
      !mobileNavbarRef?.current?.contains(event?.target)
    ) {
      setMobileNavbar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileNavbar]);

  const open = Boolean(mobileMenu);

  const handleClick = (event) => {
    if (mobileMenu) {
      setMobileMenu(null);
    } else {
      setMobileMenu(event.currentTarget);
    }
  };

  const handleClose = () => {
    setMobileMenu(null);
  };

  const renderNavbarItems = routes.map(
    ({ name, icon, href, route, collapse }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        href={href}
        route={route}
        handleClose={handleClose}
        collapse={Boolean(collapse)}
        onClick={({ currentTarget }) => {
          if (collapse) {
            setDropdown(currentTarget);
            setDropdownEl(currentTarget);
            setDropdownName(name);
          }
        }}
        onMouseEnter={({ currentTarget }) => {
          if (collapse) {
            setDropdown(currentTarget);
            setDropdownEl(currentTarget);
            setDropdownName(name);
          }
        }}
        onMouseLeave={() => {
          setDropdown(null);
          setDropdownEl(null);
        }}
        light={light}
      />
    )
  );

  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement={dropdownName === 'Hire A Talent' ? 'bottom' : 'top-start'}
      transition
      sx={{
        zIndex: 1002,
        mx: 'auto',
        width: dropdownName === 'Hire A Talent' ? '100%' : 'auto',
      }}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (dropdown) {
          setDropdown(null);
          setDropdownEl(null);
        }
      }}
    >
      {({ TransitionProps }) =>
        dropdown && (
          <Grow
            {...TransitionProps}
            sx={{
              background: !dropdownName
                ? 'transparent'
                : dropdownName === 'Hire A Talent'
                  ? '#F7F8FB'
                  : '#fff',
              borderRadius: '11px',
              boxShadow: '0px 0px 4px 0px #00000040',
              maxWidth: dropdownName === 'Hire A Talent' ? '99%' : 'auto',
              minHeight: 'auto',
              mx: 'auto',
            }}
          >
            <Box borderRadius="lg" sx={{ width: 'auto' }}>
              <Box
                shadow="lg"
                borderRadius="lg"
                p={dropdownName === 'Hire A Talent' ? 1 : 0}
                mt={1}
                sx={{ width: 'auto' }}
              >
                {dropdownName === 'Hire A Talent' ? (
                  <HireLinks
                    data={HIRE_A_TALENT_MENU}
                    setDropdown={setDropdown}
                  />
                ) : null}
                {routes?.map(({ collapse, name }) => {
                  if (
                    name === dropdownName &&
                    dropdownName !== 'Hire A Talent'
                  ) {
                    return collapse?.map(
                      ({ name, icon, description, href }, index) => (
                        <Box key={index}>
                          <DropItems
                            name={name}
                            icon={icon}
                            description={description}
                            href={href}
                            index={index}
                            collapse={collapse}
                            setDropdown={setDropdown}
                          />
                        </Box>
                      )
                    );
                  }
                })}
              </Box>
            </Box>
          </Grow>
        )
      }
    </Popper>
  );

  return (
    <>
      {layout ? (
        <RemoteLayout
          relative={relative}
          sticky={sticky}
          Link={Link}
          center={center}
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
        />
      ) : (
        <GlobalLayout
          relative={relative}
          sticky={sticky}
          Link={Link}
          center={center}
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
        />
      )}
    </>
  );
}

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node,
      href: PropTypes.string,
      route: PropTypes.string,
      collapse: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          description: PropTypes.string,
          href: PropTypes.string,
          route: PropTypes.string,
          collapse: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              description: PropTypes.string,
              href: PropTypes.string,
              route: PropTypes.string,
            })
          ),
        })
      ),
    })
  ).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.shape({
    type: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    variant: PropTypes.string,
  }),
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};

export default DefaultNavbar;
