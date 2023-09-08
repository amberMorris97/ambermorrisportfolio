import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme } from '@mui/material';
import { Link } from "react-router-dom";

import ProjectModal from './ProjectModal.jsx';
import { projectDetails, skillsDetails } from './content/cardDetails';

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up('sm'));

  const handleOpen = (e) => {
    projectDetails.forEach((project, idx) => {
      if (idx === parseInt(e.target.id)) {
        setModalContent(project);
      }
    });
    setOpen(true);
    return;
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="project-section" name="projects">
      <h1>Projects</h1>
      <Grid container spacing={3}>
        {projectDetails.map((project, idx) => (
          <Grid
            id={idx}
            key={idx}
            item xs={12}
            sm={6}
            md={4}
            onClick={(e) => handleOpen(e, true)}
          >
            <Card id={idx} sx={{ maxWidth: 345 }}>
              <CardContent id={idx}>
                <CardMedia
                  sx={{height: 0, paddingTop: '56.25%'}}
                  image={project.main}
                  title={project.title}
                  id={idx}
                  />
                <Typography id={idx} variant="h6">{project.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
    <ProjectModal
      modalContent={modalContent}
      handleClose={handleClose}
      open={open}
    />
    </div>
  )
}

export default Projects;