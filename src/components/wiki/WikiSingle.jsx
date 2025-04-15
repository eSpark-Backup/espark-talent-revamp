import dynamic from 'next/dynamic';
import { Box, Grid, Container } from '@mui/material';
import { boxContainerStyle } from '@/components/wiki/WikiSingleStyles';

const WikiSingle = ({ data }) => {
  const WikiSingleRigth = dynamic(
    () => import('@/components/wiki/WikiSingleRigth')
  );
  const WikiSingleLeft = dynamic(
    () => import('@/components/wiki/WikiSingleLeft')
  );

  return (
    <>
      <Box sx={boxContainerStyle}>
        <Container>
          <Grid container spacing={4}>
            <Grid item lg={8.2} md={8.5} xs={12} sm={12}>
              <WikiSingleLeft data={data} />
            </Grid>
            <Grid item lg={3.8} md={3.5} xs={12} sm={12}>
              <WikiSingleRigth data={data} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WikiSingle;
