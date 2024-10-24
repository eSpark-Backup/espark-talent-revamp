import React from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Link from 'next/link';
import {
  BOOK_A_DEMO,
  HIRE_A_TALENT_LINK,
} from '@/constants/global/HireTalentButton';
import {
  hireTalentBtnStyle,
  btnBoxStyle,
} from '@/constants/global/header/HireTalentButton';
const HireTalentButton = ({ handleOpenUserMenu, display }) => {
  return (
    <Box sx={{ ...btnBoxStyle, display }} className="hireTalentBtnNav">
      <Link href={HIRE_A_TALENT_LINK} target="_blank">
        <Button
          onClick={handleOpenUserMenu}
          size="small"
          sx={hireTalentBtnStyle}
        >
          {BOOK_A_DEMO}
        </Button>{' '}
      </Link>
    </Box>
  );
};

export default HireTalentButton;
