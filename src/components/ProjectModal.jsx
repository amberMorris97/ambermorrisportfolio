import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Link } from '@mui/material';

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
    overflow: 'auto',
    maxHeight: '80vh',
    color: '#000'
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
            <br />
            <Typography>
              {modalContent.description}
            </Typography>
            <br />
            <Link
              href={modalContent.github}
              target="_blank"
              rel="noopener">Github</Link>
            <br />
            {
              modalContent.api && (
                <Link
                  href={modalContent.api}
                  target="_blank"
                  rel="noopener">API</Link>
            )}
            {
              modalContent.demo && (
                <Link
                  href={modalContent.demo}
                  target="_blank"
                  rel="noopener">Live demo</Link>
              )}
            <br />
            { modalContent.full && <img src={modalContent.full} /> }
            {modalContent.photos.map((photo) => (
              <img src={photo} />
            ))}
          </Box>
        </Modal>
    </div>
  );
}

export default ProjectModal;