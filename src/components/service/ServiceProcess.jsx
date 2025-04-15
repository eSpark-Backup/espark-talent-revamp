'use client';

import { Box, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { capitalizeFirstLetter } from '@/utils/cors';
import {
  processCardBottomBoxStyle,
  processCardBottomImageStyle,
  processCardBottomTextStyle,
  processCardBottomTitleStyle,
  processCardTopBoxStyle,
  processCardTopImagStyle,
  processCardTopTextStyle,
  ProcessCardTopTitleStyle,
  processCardVectorStyles,
} from '@/components/hire-developer/HireDeveloperStyle';

const ServiceProcess = ({ data, windowWidth, styles }) => {
  const {
    mainBoxStyle,
    topProcessParentBoxStyle,
    topProcessBoxStyle,
    bottomProcessParentBoxStyle,
    bottomProcessBoxStyle,
  } = styles || {};
  const full_stack = 'full-stack';
  const mern_stack = 'mern-stack';
  const path = usePathname();

  const ProcessCardTop = ({ data }) => {
    return (
      <Box sx={processCardTopBoxStyle()}>
        <Typography sx={ProcessCardTopTitleStyle(data)}>
          {capitalizeFirstLetter(data?.title)}
        </Typography>
        <Typography
          sx={processCardTopTextStyle(path, full_stack, mern_stack)}
          dangerouslySetInnerHTML={{ __html: data?.text }}
        />
        <Box
          component={'img'}
          src={data?.image}
          sx={processCardTopImagStyle()}
        />
      </Box>
    );
  };

  const ProcessCardBottom = ({ data }) => {
    return (
      <Box sx={processCardBottomBoxStyle()}>
        <Box
          component={'img'}
          src={data?.image}
          sx={processCardBottomImageStyle()}
        />
        <Typography sx={processCardBottomTitleStyle(data)}>
          {capitalizeFirstLetter(data?.title)}
        </Typography>
        <Typography
          sx={processCardBottomTextStyle()}
          dangerouslySetInnerHTML={{ __html: data?.text }}
        />
      </Box>
    );
  };

  return (
    <>
      <Box sx={mainBoxStyle}>
        <Box sx={topProcessParentBoxStyle}>
          <Box sx={topProcessBoxStyle}>
            <ProcessCardTop data={data?.processes[0]} />
            <ProcessCardTop
              data={
                windowWidth > 1439 ? data?.processes[2] : data?.processes[1]
              }
            />
            <ProcessCardTop
              data={
                windowWidth > 1439 ? data?.processes[4] : data?.processes[2]
              }
            />
            {data?.processes?.slice(0, 5)?.map((_vector, _index) => (
              <Box
                key={_index}
                component={'img'}
                src={_vector?.vec}
                sx={
                  processCardVectorStyles(path, full_stack, mern_stack)[_index]
                }
              />
            ))}
          </Box>
        </Box>

        <Box sx={bottomProcessParentBoxStyle}>
          <Box sx={bottomProcessBoxStyle}>
            <ProcessCardBottom
              data={
                windowWidth > 1439 ? data?.processes[1] : data?.processes[3]
              }
            />
            <ProcessCardBottom
              data={
                windowWidth > 1439 ? data?.processes[3] : data?.processes[4]
              }
            />
            <ProcessCardBottom data={data?.processes[5]} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ServiceProcess;
