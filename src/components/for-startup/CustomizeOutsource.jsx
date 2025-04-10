'use client';

import { Box, Grid, ListItemIcon, Typography, Container } from '@mui/material';
import Image from 'next/image';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {
  outerBoxStyle,
  titleTypographyStyle,
  listItemBoxStyle,
  listItemIconStyle,
  taskAltIconStyle,
  listItemTypographyStyle,
  imageBoxStyle,
} from '@/constants/solutions/for-business-startup/CustomizeOutsourceConstant';

const CustomizeOutsource = ({ data }) => {
  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }

  const { listItem, title, image, alt } = data;

  if (!listItem || listItem?.length === 0) {
    return <Typography>Error: No list items provided</Typography>;
  }

  return (
    <Box sx={outerBoxStyle}>
      <Container>
        <Grid container display={'flex'} alignItems={'center'}>
          <Grid item sm={12} md={6.4}>
            <Box>
              <Box>
                <Typography variant="h3" sx={titleTypographyStyle}>
                  {title}
                </Typography>
              </Box>
            </Box>
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
          </Grid>
          <Grid item xs={12} sm={12} md={5.6}>
            <Box sx={imageBoxStyle}>
              <Image
                quality="85"
                priority={true}
                src={image}
                width={380}
                height={300}
                alt={alt}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomizeOutsource;
