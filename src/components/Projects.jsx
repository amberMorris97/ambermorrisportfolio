import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";

import ProjectModal from './ProjectModal.jsx';
import { projectDetails, skillsDetails } from './cardDetails';

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpen = (e) => {
    projectDetails.forEach((project, idx) => {
      if (idx === parseInt(e.target.id)) {
        setModalContent(project);
        console.log(project.title)
      }
    });
    setOpen(true);
    return;
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="project-section" name="projects">
      <h1>Projects</h1>
      <Grid container spacing={2}>
        {projectDetails.map((project, idx) => (
          <Grid
            key={idx}
            id={idx}
            item xs={12}
            lg={4}
            onClick={(e) => handleOpen(e, true)}>
            <Card sx={{ maxWidth: 345 }} id={idx}>
              <CardContent id={idx}>
                <CardMedia
                  sx={{ height: 140, width: 300 }}
                  image={project.main}
                  title="placeholder"
                  id={idx}
                />
                  <Typography id={idx}>{project.title}</Typography>
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