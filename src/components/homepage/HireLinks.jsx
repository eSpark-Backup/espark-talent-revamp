'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import 'swiper/swiper-bundle.css';

const HireLinks = ({ data, currentPage, setDropdown, styles }) => {
  const {
    mainBoxStyle,
    innerBoxStyle,
    parentBoxStyle,
    sectionBoxStyle,
    headingStyle,
    linkBoxStyle,
    titleStyle,
  } = styles || {};

  const RenderSection = ({ section, index }) => {
    const { lists } = section || {};

    return (
      <Box sx={sectionBoxStyle(index)}>
        {lists?.map((list, listIndex) => (
          <RenderList
            list={list}
            listIndex={listIndex}
            index={index}
            key={listIndex}
          />
        ))}
      </Box>
    );
  };

  const RenderList = ({ list, listIndex, index }) => {
    const { heading, listItems } = list || {};
    return (
      <div key={listIndex}>
        <Typography variant="h5" color="primary" sx={headingStyle}>
          {heading}
        </Typography>
        {listItems?.map((item, itemIndex) => (
          <RenderLink
            item={item}
            itemIndex={itemIndex}
            index={index}
            listIndex={listIndex}
            key={itemIndex}
          />
        ))}
      </div>
    );
  };

  const RenderLink = ({ item, itemIndex, index, listIndex }) => {
    const { link, title } = item || {};
    return (
      <Box
        onClick={() => setDropdown(null)}
        key={`${index}-${listIndex}-${itemIndex}`}
        sx={linkBoxStyle}
      >
        <Link href={link}>
          <Typography variant="body1" sx={titleStyle}>
            {title}
          </Typography>
        </Link>
      </Box>
    );
  };

  return (
    <Box sx={mainBoxStyle(currentPage)}>
      <Box sx={innerBoxStyle}>
        <Box sx={parentBoxStyle}>
          {data?.sections?.map((section, index) => (
            <RenderSection section={section} key={index} index={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HireLinks;
