'use client';
import Collapse from '@mui/material/Collapse';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

function DefaultNavbarDropdown({
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
  ...rest
}) {
  const lastIndex = routes?.length - 1;
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    } else {
      null;
    }
  };

  return (
    <>
      <Box
        {...rest}
        mx={{ xs: 2, md: 1.5, lg: 2 }}
        display="flex"
        alignItems="center"
        color={light ? 'white' : 'dark'}
        opacity={light ? 1 : 0.6}
        sx={{
          height: '95px',
          cursor: 'pointer',
          userSelect: 'none',
          gap: 0.7,
          '@media(max-width: 1023px)': {
            py: 1,
            height: 'auto',
            justifyContent: 'space-between',
            borderTop: 1,
            borderBottom: index === lastIndex && !collapseStatus ? 1 : 0,
            borderColor: '#e6e6e6',
          },
        }}
      >
        <Box onClick={handleClick}>
          <Typography
            onClick={collapse ? null : handleClose}
            fontWeight="regular"
            textTransform="capitalize"
            color={light ? 'white' : 'dark'}
            sx={{
              height: '100%',
              fontSize: { xs: '15px', md: '16px', lg: '17px', xl: '18px' },
              color: '#222222',
              fontWeight: 400,
              ml: 0,
              mr: 0.25,
              '@media(min-width: 1024px) and (max-width:1249px)': {
                fontSize: '12px',
              },
              '@media(min-width: 1250px) and (max-width:1399px)': {
                fontSize: '16px',
              },
            }}
          >
            {name}
          </Typography>
        </Box>
        {collapse && (
          <Box
            component={'img'}
            src={icon}
            sx={{
              transform:
                dropdownName === name ? 'rotate(182deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        )}
      </Box>
      {/* </Link> */}
      {children && collapse && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

export default DefaultNavbarDropdown;
