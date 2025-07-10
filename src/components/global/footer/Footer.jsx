'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FOOTER_STYLE,
  HIDDEN_PATHS,
  ORGANIZE_TEAM_DATA,
} from '@/constants/global/footer';
import OrganizeTeam from '../OrganizeTeam';

const Footer = ({ data }) => {
  const pathName = usePathname();
  const currentYear = new Date()?.getFullYear();
  const {
    logo,
    logoLink,
    description,
    copyRight,
    copyRightLinks,
    pages,
    socialMedia,
  } = data || {};

  const {
    mainBoxStyle,
    innerBoxStyle,
    logoSectionBoxStyle,
    imageBoxStyle,
    imageStyle,
    descriptionStyle,
    socialMediaIconBoxStyle,
    socialLinkBoxStyle,
    iconStyle,
    pagesBoxStyle,
    pageBoxStyle,
    labelAndUlBoxStyle,
    lebelStyle,
    ulStyle,
    textIconAndValueBoxStyle,
    valueStyle,
    pageNameStyle,
    horizontalLineStyle,
    copyRightBoxStyle,
    copyRightTextStyle,
    termsAndConditionBoxStyle,
    termsAndConditionLinkStyle,
    termsAndConditionTextStyle,
  } = FOOTER_STYLE || {};

  const renderSocialMediaIcons = (icon, index) => (
    <Box key={index} sx={socialLinkBoxStyle}>
      <Link href={icon?.link} target="_blank">
        <Image
          alt={icon?.alt}
          src={icon?.img}
          style={iconStyle}
          quality={80}
          fill
        />
      </Link>
    </Box>
  );

  const renderFooterPages = (eachItem, index) => (
    <Box key={index} sx={pageBoxStyle(index)}>
      {eachItem?.item?.map((mp, mpIndex) => (
        <Box key={mpIndex} sx={labelAndUlBoxStyle(mpIndex)}>
          <Typography sx={lebelStyle}>{mp?.label}</Typography>
          <Typography sx={ulStyle} component="ul">
            {mp?.label === 'Contact Us' ? (
              <Box component={'li'}>
                {mp?.info?.map((_text, _textIndex) => (
                  <Box key={_textIndex} sx={textIconAndValueBoxStyle}>
                    <Typography
                      sx={valueStyle(_textIndex)}
                      component="li"
                      dangerouslySetInnerHTML={{
                        __html: _text?.link
                          ? `<a href="${_text?.link}" style="text-decoration: underline; color: inherit;">${_text?.value}</a>`
                          : _text?.value || '',
                      }}
                    />
                  </Box>
                ))}
              </Box>
            ) : (
              mp?.pages?.map((_page, _pIndex) => (
                <Typography
                  key={_pIndex}
                  sx={pageNameStyle(_pIndex)}
                  component="li"
                >
                  <Link href={_page?.pgLink}>{_page?.pgName}</Link>
                </Typography>
              ))
            )}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const renderCopyRightLinks = (link, linkIndex) => (
    <Box key={linkIndex} sx={termsAndConditionBoxStyle(linkIndex)}>
      <Link href={link?.link || '#'} style={termsAndConditionLinkStyle}>
        <Typography sx={termsAndConditionTextStyle}>{link?.text}</Typography>
      </Link>
    </Box>
  );

  const shouldHideCTA = HIDDEN_PATHS?.includes(pathName);

  if (shouldHideCTA) {
    return null;
  }

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={{ pt: { xs: 5, sm: 6, md: 8, lg: 10 }, pb: { xs: 2, md: 4 } }}>
        <OrganizeTeam data={ORGANIZE_TEAM_DATA} />
      </Box>
      <Box sx={innerBoxStyle}>
        <Box sx={logoSectionBoxStyle}>
          <Box sx={imageBoxStyle}>
            <Link href={logoLink || '#'}>
              <Image alt="" src={logo} style={imageStyle} quality={80} fill />
            </Link>
          </Box>
          <Typography sx={descriptionStyle}>{description}</Typography>
          <Box sx={socialMediaIconBoxStyle}>
            {socialMedia?.map(renderSocialMediaIcons)}
          </Box>
        </Box>
        <Box sx={pagesBoxStyle}>{pages?.map(renderFooterPages)}</Box>
      </Box>
      <Box sx={horizontalLineStyle} />
      <Box sx={copyRightBoxStyle}>
        <Typography
          sx={copyRightTextStyle}
        >{`© ${currentYear} ${copyRight}`}</Typography>
        {copyRightLinks?.map(renderCopyRightLinks)}
      </Box>
    </Box>
  );
};

export default Footer;
