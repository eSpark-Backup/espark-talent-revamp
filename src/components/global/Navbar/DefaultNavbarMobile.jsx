'use client';
import * as React from 'react';
import Link from 'next/link';
import Collapse from '@mui/material/Collapse';
import DefaultNavbarDropdown from './DefaultNavbarDropdown';
import Menu from '@mui/material/Menu';
import { Box, Fade, Typography } from '@mui/material';

const DefaultNavbarMobile = ({ routes, open, mobileMenu, handleClose }) => {
  const [collapse, setCollapse] = React.useState('');

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
      <DefaultNavbarDropdown
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
      >
        <Box
          sx={{
            height: 'auto',
            maxHeight: '13rem',
            overflowY: 'scroll',
            px: 2,
            pb: 1,
            mb: 2,
          }}
        >
          {routeCollapses &&
            routeCollapses.map((item) => (
              <Box key={item.name} px={2} py={1}>
                {item.collapse ? (
                  <>
                    <Typography
                      py={1}
                      px={0.4}
                      textTransform="capitalize"
                      sx={{ fontSize: '16px', fontWeight: 700 }}
                    >
                      {item.name}
                    </Typography>
                    {item.collapse.map((el) => (
                      <Link href={el?.route || ''} key={el.name}>
                        <Typography
                          onClick={handleClose}
                          minWidth="11.25rem"
                          textTransform="capitalize"
                          py={0.625}
                          px={2}
                          sx={{
                            display: 'block',
                            fontSize: '14px',
                            color: 'black',
                            '&:hover': {
                              color: '#029894',
                            },
                          }}
                        >
                          {el.name}
                        </Typography>
                      </Link>
                    ))}
                  </>
                ) : (
                  <Box
                    onClick={handleClose}
                    key={item?.key}
                    sx={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: 2.5,
                      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                      py: 1,
                      pl: 1,
                    }}
                  >
                    <Link key={item?.key} href={item?.href || '#'}>
                      <Box sx={{ width: { xs: '30px' }, pt: 0.5 }}>
                        <Box
                          component={'img'}
                          src={item?.icon}
                          sx={{ width: '100%', height: '100%' }}
                        />
                      </Box>
                    </Link>
                    <Box sx={{ width: 'auto' }}>
                      <Link
                        key={item?.key}
                        href={item?.href || '#'}
                        style={{ width: 'auto', backgroundColor: 'yellow' }}
                      >
                        <Typography
                          textTransform="capitalize"
                          sx={{
                            color: '#222222',
                            fontSize: { xs: '15px', md: '17px' },
                            fontWeight: 600,
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          sx={{
                            transition: 'all 300ms linear',
                            color: 'rgb(0, 0, 0)',
                            fontSize: { xs: '12px', md: '13px' },
                            fontWeight: 400,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
        </Box>
      </DefaultNavbarDropdown>
    )
  );

  return (
    <div>
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
          sx={{
            mt: '20px',
            width: '100%',
            boxShadow: '0px',
            zIndex: 1100,
          }}
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          PaperProps={{
            sx: {
              width: '100%',
              boxShadow:
                '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
              borderTopLeftRadius: 0,
              borderTop: `1px solid #cfcfd0`,
              borderTopRightRadius: 0,
              py: { xs: 1.5, sm: 3 },
              px: { xs: 3, sm: 3 },
            },
          }}
        >
          <Collapse
            sx={{
              width: '100%',
              mx: 'auto',
            }}
            in={Boolean(open)}
            timeout={50}
            unmountOnExit
          >
            <Box width="calc(100% + 1.625rem)" my={0} ml={-2}>
              {renderNavbarItems}
            </Box>
          </Collapse>
        </Menu>
      )}
    </div>
  );
};

export default DefaultNavbarMobile;
