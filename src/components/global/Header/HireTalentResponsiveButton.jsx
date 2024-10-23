import React from 'react';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { HIRE_A_TALENT, HIRE_A_TALENT_LINK } from '@/constants/global/header';
import {
  buttonStyle,
  boxStyle,
} from '@/constants/global/header/HireTalentResponsiveButton';

const HireTalentResponsiveButton = ({ handleOpenUserMenu, display }) => {
  return (
    <Box sx={{ ...boxStyle, display }} className="hireTalentResponsiveBtnNav">
      <Link href={HIRE_A_TALENT_LINK} target="_blank">
        <Button onClick={handleOpenUserMenu} size="small" sx={buttonStyle}>
          {HIRE_A_TALENT}
        </Button>{' '}
      </Link>
    </Box>
  );
};

export default HireTalentResponsiveButton;
