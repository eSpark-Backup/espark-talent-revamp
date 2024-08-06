'use client';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';

const style = {
  position: 'absolute',
  width: '95%',
  maxWidth: '519px',
  minHeight: '611px',
  maxHeight: '98%',
  bgcolor: 'white',
  borderRadius: '24px',
  boxShadow: '0px 4px 10.1px 0px rgba(0, 0, 0, 0.38)',
  display: 'flex',
  flexDirection: 'column',
};

export default function HireModal({ content, open, handleModalClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
          <Box sx={style}>
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'flex-end',
                py: { xs: 1.5, md: 1.5 },
                px: { xs: 1.5, md: 1.5 },
                backgroundColor: '#fff',
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
              }}
            >
              <Box
                onClick={handleModalClose}
                sx={{
                  color: '#029894',
                  width: { xs: '25px', md: '30px' },
                  height: { xs: '25px', md: '30px' },
                  margin: 0,
                  padding: 0,
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
                flex: 1,
                overflowY: 'auto',
                px: { xs: 2, sm: 3.5, md: 5 },
                pt: { xs: 7, md: 6 },
                pb: { xs: 1, sm: 6 },
              }}
            >
              {content}
            </Box>
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}
