import Image from 'next/image';
import { Box, Container, Grid, ListItemIcon, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {
  headingStyles,
  subHeadingStyles,
  listItemStyles,
  listItemIconStyles,
  taskAltIconStyles,
  listItemTextStyles,
  imageContainerStyles,
  containerStyles,
  gridItemLeftStyles,
  boxLeftStyles,
  gridItemRightStyles,
} from '@/components/how-it-work/ChooseUsStyles';

const ChooseUs = ({ chooseUs }) => {
  const { list, image, alt, heading, subHeading } = chooseUs;
  return (
    <Box sx={containerStyles}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={8} sx={gridItemLeftStyles}>
            <Box sx={boxLeftStyles}>
              <Box>
                <Typography variant="h2" sx={headingStyles}>
                  {heading}
                </Typography>
                <Typography sx={subHeadingStyles}>{subHeading}</Typography>
              </Box>
              <Grid container>
                {list?.map((item, index) => (
                  <Grid item xs={12} md={12} lg={6} key={index}>
                    <Box sx={listItemStyles}>
                      <Box>
                        <ListItemIcon sx={listItemIconStyles}>
                          <TaskAltIcon
                            fontSize="small"
                            sx={taskAltIconStyles}
                          />
                        </ListItemIcon>
                      </Box>
                      <Box>
                        <Typography sx={listItemTextStyles}>
                          {item?.content}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item sm={12} md={4} sx={gridItemRightStyles}>
            <Box sx={imageContainerStyles}>
              <Image
                quality="85"
                priority={true}
                src={image}
                width={420}
                height={25}
                alt={`${alt}`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChooseUs;
