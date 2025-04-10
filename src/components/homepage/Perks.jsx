'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import { Button, FormControl, Typography } from '@mui/material';
import {
  buttonsStyleForPerksComponent,
  buttonTextStyleForPerksComponent,
} from '@/constants/homepage';

const Perks = ({ data, btnText, btnLink, target, styles, title }) => {
  const [checked, setChecked] = useState(true);
  const [index, setIndex] = useState(0);
  const {
    mainBoxStyle,
    perksTitleStyle,
    perksBoxStyle,
    perksButtonsBoxStyle,
    perksButtonTextAndImageBoxStyle,
    perksImageStyle,
    perksSerialNumberAndIconBoxStyle,
    perksSerialNumberTextStyle,
    perksIconStyle,
    perksContentMainBoxStyle,
    perksContentBoxStyle,
    perksContentHeadingStyle,
    perksContentParagraphStyle,
    perksContentUlStyle,
    perksContentLiBoxStyle,
    perksContentLiImageStyle,
    perksContentLiStyle,
    perksButtonStyle,
  } = styles || {};

  const handleChange = (index) => {
    setChecked(false);
    setTimeout(() => {
      setIndex(index);
      setChecked(true);
    }, 150);
  };

  const perksLisItems = (list, listIndex) => (
    <Box key={listIndex} sx={perksContentLiBoxStyle}>
      <Box
        component={'img'}
        src="/images/homepage/our-perks/list-icon.png"
        sx={perksContentLiImageStyle}
      />
      <Typography component={'li'} sx={perksContentLiStyle}>
        {list?.item}
      </Typography>
    </Box>
  );

  const perksContent = (content, checked, btnText, btnLink, target) => {
    const { heading, paragraph, list } = content || {};
    return (
      <Grow in={checked} timeout={{ enter: 450, exit: 450 }}>
        <Box sx={perksContentBoxStyle}>
          <Typography sx={perksContentHeadingStyle}>{heading}</Typography>
          <Typography sx={perksContentParagraphStyle}>{paragraph}</Typography>
          <Typography component={'ul'} sx={perksContentUlStyle}>
            {list?.map(perksLisItems)}
          </Typography>
          {btnText && (
            <Button
              disableRipple
              onClick={() => window?.open(btnLink, target)}
              sx={perksButtonStyle}
            >
              {btnText}
            </Button>
          )}
        </Box>
      </Grow>
    );
  };

  const perksButtons = (btn, ind) => (
    <Button
      key={ind}
      disableRipple
      sx={buttonsStyleForPerksComponent(index, ind)}
      variant="contained"
      onClick={() => handleChange(ind)}
    >
      <Box sx={perksButtonTextAndImageBoxStyle}>
        <Box
          component={'img'}
          src={index == ind ? btn?.activeIcon : btn?.icon || '/'}
          sx={perksImageStyle}
        />
        <Typography sx={buttonTextStyleForPerksComponent(index, ind)}>
          {btn?.title}
        </Typography>
      </Box>
      <Box sx={perksSerialNumberAndIconBoxStyle}>
        <Typography sx={perksSerialNumberTextStyle}>{btn?.sno}</Typography>
        <Box
          component={'img'}
          src={btn?.hoverIcons || '/'}
          sx={perksIconStyle}
        />
      </Box>
    </Button>
  );

  return (
    <>
      {data === null || data?.length === 0 ? null : (
        <Box sx={mainBoxStyle}>
          <FormControl>
            <Box>
              <Typography
                sx={perksTitleStyle}
                dangerouslySetInnerHTML={{
                  __html: title || '',
                }}
              />
            </Box>
            <Box sx={perksBoxStyle}>
              <Box sx={perksButtonsBoxStyle}>{data?.map(perksButtons)}</Box>
              <Box sx={perksContentMainBoxStyle}>
                {perksContent(
                  data[index]?.content,
                  checked,
                  btnText,
                  btnLink,
                  target
                )}
              </Box>
            </Box>
          </FormControl>
        </Box>
      )}
    </>
  );
};

export default Perks;
