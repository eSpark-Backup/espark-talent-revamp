'use client';

import {
  Box,
  Typography,
  Container,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import RectangleSharpIcon from '@mui/icons-material/RectangleSharp';
import CircleIcon from '@mui/icons-material/Circle';
import Form from '@/components/partnership/Form';
import { styles } from '@/components/partnership/PartnershipStyles';

const Partnership = ({ partnership }) => {
  const { content, formContent, fields } = partnership;

  return (
    <Box sx={styles.container}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.contentBox}>
            <>
              {content?.map((item, index) => (
                <Box key={index}>
                  <Typography
                    variant="h2"
                    sx={styles.title}
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                  />
                  <Typography sx={styles.description}>
                    {item?.description}
                  </Typography>
                  {item?.items?.map((list, itemIndex) => (
                    <Box key={itemIndex} sx={styles.listItem}>
                      <ListItemIcon sx={styles.listItemIcon}>
                        <CircleIcon sx={styles.circleIcon} />
                        <RectangleSharpIcon sx={styles.rectangleIcon} />
                      </ListItemIcon>

                      <ListItemText>
                        <Typography sx={styles.listItemText}>{list}</Typography>
                      </ListItemText>
                    </Box>
                  ))}
                </Box>
              ))}
            </>
          </Box>
          <Box sx={styles.formBox}>
            <Form formContent={formContent} fields={fields} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Partnership;
