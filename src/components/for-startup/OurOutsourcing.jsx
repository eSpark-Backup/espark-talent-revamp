'use client';

import { Box, Grid, ListItemIcon, Typography, Container } from '@mui/material';
import Image from 'next/image';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {
  outerBoxStyle,
  innerBoxStyle,
  headingTypographyStyle,
  subHeadingTypographyStyle,
  leftGridBoxStyle,
  titleTypographyStyle,
  descriptionTypographyStyle,
  listBoxStyle,
  listItemBoxStyle,
  listItemIconStyle,
  listItemTypographyStyle,
  imageBoxStyle,
  taskAltIconStyle,
} from '@/components/for-startup/OurOutsourcingStyles';

const OurOutsourcing = ({ data }) => {
  const { listItem, heading, subHeading } = data || {};
  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }

  return (
    <Box sx={outerBoxStyle}>
      <Box sx={innerBoxStyle}>
        <Typography variant="h2" sx={headingTypographyStyle}>
          {heading}
        </Typography>
        <Typography sx={subHeadingTypographyStyle}>{subHeading}</Typography>
      </Box>
      <Container>
        <Grid container>
          <Grid item sm={12} md={6} lg={6.4}>
            <Box sx={leftGridBoxStyle}>
              <Typography variant="h3" sx={titleTypographyStyle}>
                {data?.title}
              </Typography>
              <Typography sx={descriptionTypographyStyle}>
                {data?.description}
              </Typography>
            </Box>
            <Box sx={listBoxStyle}>
              {listItem?.map((item, index) => (
                <Grid item sm={12} md={10} key={index}>
                  <Box sx={listItemBoxStyle}>
                    <ListItemIcon sx={listItemIconStyle}>
                      <TaskAltIcon fontSize="small" sx={taskAltIconStyle} />
                    </ListItemIcon>
                    <Typography sx={listItemTypographyStyle}>
                      {item?.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5.6}>
            <Box sx={imageBoxStyle}>
              <Image
                quality="85"
                priority={true}
                src={data?.image}
                width={380}
                height={300}
                alt={`${data?.alt}`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurOutsourcing;
