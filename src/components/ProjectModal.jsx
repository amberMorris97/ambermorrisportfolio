import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const ProjectModal = ({ modalContent, handleClose, open }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    maxHeight: '80vh',
  };
console.log(modalContent)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        >
          <Box sx={style} className="modal-content">
            <Typography>
              {modalContent.title}
            </Typography>
            <img
              src={modalContent.full} />
          </Box>
        </Modal>
    </div>
  );
}

export default ProjectModal;