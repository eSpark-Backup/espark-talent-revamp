import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const OrganizeTeam = () => {
  return (
    <Box
      sx={{
        width: '90%',
        height: '100%',
        mx: 'auto',
        minHeight: '520px',
        maxWidth: '1438px',
        backgroundImage:
          'url(/images/new-home/organize-team/organize-team-rec.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '90%', backgroundColor: 'red' }}>ALi is the</Box>
      {/* <Typography
        sx={{
          fontSize: '72px',
          fontWeight: 500,
          color: '#ffff',
          //   maxWidth: '1400px',
        }}
      >
        Organise your Team
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2.5,
            flexWrap: 'nowrap',
          }}
        >
          <Box
            component={'span'}
            sx={{
              width: '100%',
              maxWidth: '305px',
              maxHeight: '94px',
              border: '1px solid #fff',
              borderRadius: '50px',
              p: 0.8,
              px: 1.5,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {[1, 2, 3, 4]?.map((avatar, index) => (
              <Avatar
                key={index}
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmmIYtxWFcZmcMWfjTbJewT-PDRuZ7fNX-vvEnxvf6KfDSt5XGwH-CScxB1oCr2PyIV0&usqp=CAU"
                sx={{
                  width: '78px',
                  height: '78px',
                  ml: index === 0 ? 0 : -1.5,
                }}
              />
            ))}
          </Box>
          with eSpark Talent
        </Box>
      </Typography> */}
      {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}

      {/* <Typography
          sx={{
            fontSize: '86px',
            fontWeight: 500,
            color: '#ffff',
            maxWidth: '1150px',
          }}
        >
          with eSpark Talent
        </Typography> */}
      {/* </Box> */}
    </Box>
  );
};

export default OrganizeTeam;
