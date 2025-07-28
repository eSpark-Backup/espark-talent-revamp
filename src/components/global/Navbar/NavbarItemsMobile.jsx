import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const NavbarItemsMobile = ({
  item,
  handleClose,
  nameStyle,
  linkStyle,
  nameAndDescriptionBoxStyle,
  iconBoxStyle,
  iconStyle,
  nameLinkStlyle,
  collapseNameStyle,
  collapseDescriptionStyle,
}) => {
  const { collapse, name, key, href, icon, description } = item || {};

  const renderItem = (el) => (
    <Link href={el?.route || ''} key={el?.name}>
      <Typography
        onClick={handleClose}
        minWidth="11.25rem"
        textTransform="capitalize"
        py={0.625}
        px={2}
        sx={linkStyle}
      >
        {el?.name}
      </Typography>
    </Link>
  );

  return (
    <Box px={2} py={1}>
      {collapse ? (
        <>
          {name && (
            <Typography
              py={1}
              px={0.4}
              textTransform="capitalize"
              sx={nameStyle}
            >
              {name}
            </Typography>
          )}
          {collapse?.map(renderItem)}
        </>
      ) : (
        <Box onClick={handleClose} key={key} sx={nameAndDescriptionBoxStyle}>
          <Link key={key} href={href || '#'}>
            <Box sx={iconBoxStyle}>
              <Box sx={iconStyle}>
                <Image
                  src={icon}
                  alt="slider image"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  width={500}
                  height={500}
                />
              </Box>
            </Box>
          </Link>
          <Box sx={{ width: 'auto' }}>
            <Link key={key} href={href || '#'} style={nameLinkStlyle}>
              <Typography textTransform="capitalize" sx={collapseNameStyle}>
                {name}
              </Typography>
              <Typography sx={collapseDescriptionStyle}>
                {description}
              </Typography>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NavbarItemsMobile;
