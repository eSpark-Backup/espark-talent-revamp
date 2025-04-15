'use client';

import { hireRemoteimageStyle } from '@/components/hire-developer/HireDeveloperStyle';
import { Box, Button, Typography } from '@mui/material';
import { imageStyles } from './HireRemoteBannerStyles';

const HireRemoteBanner = ({ data, handleOpen, styles }) => {
  const {
    mainBoxStyle,
    containerStyle,
    contentBoxStyle,
    titleBoxStyle,
    titleTextStyle,
    descriptionTextStyle,
    buttonStyle,
    spanStyle,
    textStyle,
    companyTextStyle,
    arrayBoxStyle,
    imageBoxStyle,
  } = styles;

  return (
    <>
      <Box sx={mainBoxStyle}>
        <Box sx={containerStyle}>
          <Box sx={contentBoxStyle}>
            <Box sx={titleBoxStyle}>
              <Typography sx={titleTextStyle}>{data?.title || ''}</Typography>
            </Box>
            <Typography sx={descriptionTextStyle}>
              {data?.description || ''}
            </Typography>
            <Button disableRipple onClick={handleOpen} sx={buttonStyle}>
              {data?.btnText || ''}
            </Button>
            <Typography component={'span'} sx={spanStyle}>
              <Box component={'img'} src={data?.icon || ''} />{' '}
              <Typography sx={textStyle}>{data?.text || ''}</Typography>
            </Typography>
            <Box>
              <Typography sx={companyTextStyle}>
                {data?.companyText || ''}
              </Typography>
              <Box sx={arrayBoxStyle}>
                {Array?.isArray(data?.companiesImages) &&
                  data?.companiesImages?.map((img, index) => (
                    <Box
                      key={index}
                      component={'img'}
                      src={img}
                      sx={hireRemoteimageStyle(index)}
                      alt="img"
                    />
                  ))}
              </Box>
            </Box>
          </Box>
          <Box sx={imageBoxStyle}>
            <Box
              component={'img'}
              src={data?.bannerImage || ''}
              sx={imageStyles}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HireRemoteBanner;
