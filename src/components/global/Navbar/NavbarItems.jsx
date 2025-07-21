'use client';
import Collapse from '@mui/material/Collapse';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function NavbarItems({
  name,
  icon,
  children,
  collapse,
  collapseStatus,
  dropdownName,
  light,
  route,
  index,
  routes,
  handleClose,
  navbarItemStyle,
  ...rest
}) {
  const lastIndex = routes?.length - 1;
  const router = useRouter();
  const { itemBoxStyle, typographyStyle, imageStyle } = navbarItemStyle || {};

  const handleClick = () => {
    if (route) {
      router?.push(route);
    } else {
      null;
    }
  };

  return (
    <Box component={'li'}>
      <Box
        {...rest}
        display="flex"
        alignItems="center"
        color={light ? 'white' : 'dark'}
        opacity={light ? 1 : 0.6}
        sx={itemBoxStyle(index, lastIndex, collapseStatus)}
      >
        <Box onClick={handleClick}>
          <Typography
            onClick={collapse ? null : handleClose}
            fontWeight="regular"
            textTransform="capitalize"
            color={light ? 'white' : 'dark'}
            sx={typographyStyle}
          >
            {name}
          </Typography>
        </Box>
        {collapse && (
          <Image
            src={icon}
            alt="ar"
            width={12}
            height={12}
            style={imageStyle(dropdownName, name)}
          />
        )}
      </Box>
      {children && collapse && (
        <Collapse
          in={Boolean(collapseStatus) || false}
          timeout={400}
          unmountOnExit
        >
          {children}
        </Collapse>
      )}
    </Box>
  );
}

export default NavbarItems;
