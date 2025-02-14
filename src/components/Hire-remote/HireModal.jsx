'use client';
import React from 'react';
import { Modal, Box } from '@mui/material';

const HireModal = ({ content, open, handleModalClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEnforceFocus
      disableRestoreFocus
      disableScrollLock
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          width: '95%',
          maxWidth: '519px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'transparent',
            px: 0.5,
            pt: 0.5,
          }}
        >
          <Box
            onClick={handleModalClose}
            sx={{
              color: '#029894',
              width: { xs: '25px', md: '28px' },
              height: { xs: '25px', md: '28px' },
              borderRadius: '100%',
              cursor: 'pointer',
              border: '2px solid',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'cursive',
              fontSize: '15px',
              fontWeight: 'bold',
            }}
          >
            X
          </Box>
        </Box>
        <Box
          sx={{
            p: 2,
            mb: 4,
            mt: -2,
            maxWidth: '519px',
            height: { xs: '70vh', lg: '75vh', xl: '82vh' },
            overflow: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'transparent transparent',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {content}
        </Box>
      </Box>
    </Modal>
  );
};

export default HireModal;
