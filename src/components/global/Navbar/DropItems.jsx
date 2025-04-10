import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const DropItems = ({
  icon,
  name,
  description,
  href,
  index,
  collapse,
  setDropdown,
  dropdownItemsStyle,
}) => {
  const lastIndex = collapse?.length - 1;
  const {
    mainBoxStyle,
    iconBoxStyle,
    iconStyle,
    contentBoxStyle,
    nameStyle,
    descriptionStyle,
  } = dropdownItemsStyle || {};
  return (
    <Link href={href || '#'}>
      <Box onClick={() => setDropdown(null)} key={'1'} sx={mainBoxStyle}>
        <Box sx={iconBoxStyle}>
          <Box component={'img'} src={icon || ''} sx={iconStyle} />
        </Box>
        <Box sx={contentBoxStyle(lastIndex, index)}>
          <Typography sx={nameStyle}>{name || ''}</Typography>
          <Typography sx={descriptionStyle}>{description || ''}</Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default DropItems;
