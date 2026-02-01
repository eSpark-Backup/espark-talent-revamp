import { Box, Typography } from '@mui/material';
import Image from 'next/image';
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
    contentBoxStyle,
    nameStyle,
    descriptionStyle,
  } = dropdownItemsStyle || {};
  return (
    <Link href={href || '#'}>
      <Box onClick={() => setDropdown(null)} key={'1'} sx={mainBoxStyle}>
        <Box sx={iconBoxStyle}>
          {icon && (
            <Image src={icon} alt="icon" width={100} height={100} priority />
          )}
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
