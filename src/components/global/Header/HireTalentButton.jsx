import React from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Link from 'next/link';
import { HIRE_A_TALENT, HIRE_A_TALENT_LINK } from '@/constants/global/header';

const HireTalentButton = ({ handleOpenUserMenu, display }) => {
  return (
    <Box sx={{ flexGrow: 0, display }}>
      <Link href={HIRE_A_TALENT_LINK}>
        <Button
          onClick={handleOpenUserMenu}
          size="small"
          sx={{
            border: '1.145px solid #222',
            borderRadius: '5.727px',
            '&:hover': {
              background: '#029894',
              color: '#fff',
              border: '1.145px solid #029894',
            },
            color: '#222',
            textAlign: 'center',
            fontSize: '17.766px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '27.49px',
            padding: '11px 20px 9px 20px',
            alignItems: 'center',
          }}
        >
          {HIRE_A_TALENT}
        </Button>{' '}
      </Link>
    </Box>
  );
};

export default HireTalentButton;
