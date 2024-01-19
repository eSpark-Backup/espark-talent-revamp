import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import WikiSingleRigth from './WikiSingleRigth';
import WikiSingleLeft from './WikiSingleLeft';
import { PortableText } from '@portabletext/react';
const WikiSingle = ({ data }) => {
  // const wikiString = JSON.stringify(data);
  // const parsedWiki = JSON.parse(wikiString);

  const wikiString = JSON.stringify(data);
  const parsedWiki = JSON.parse(wikiString);
  console.log(parsedWiki);
  return (
    <>
      <Box sx={{ my: '3%', py: { xs: '8%', sm: '8%', md: '5%', lg: '3%' } }}>
        {/* <Container> */}
        {/* <Grid container spacing={4}>  */}
        {/* <Grid item lg={8} md={8} xs={12} sm={12}> */}
        {/* <WikiSingleLeft data={data} />   */}

        {/* </Grid> */}
        {/* <Grid item lg={3.5} md={3.5} xs={12} sm={12}> */}
        {/* <WikiSingleRigth data={data} /> */}
        {/* </Grid>  */}
        {/* </Grid> */}
        {/* </Container> */}
      </Box>
    </>
  );
};

export default WikiSingle;
