import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography } from '@mui/material';
import { Link } from "react-router-dom";

import { arrow_right, arrow_left } from './content/icons';
import { projectDetails, skillsDetails } from './content/cardDetails';
import ProjectModal from './ProjectModal.jsx';

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleClick = (e) => {
    const arrowClass = e.target.classList[1];

    if (arrowClass === 'fa-arrow-right') {
      handleForward();
    };

    if (arrowClass === 'fa-arrow-left') {
      handleBack();
    };
  };

  const handleForward = () => {
    if (selected === projectDetails.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    };
  };

  const handleBack = () => {
    if (selected === 0) {
      setSelected(projectDetails.length - 1);
    } else {
      setSelected(selected - 1);
    };
  };

  const handleClose = () => setOpen(false);

  const project = projectDetails[selected];

  return (
    <div className="project-section" name="projects">
      <h1>Projects</h1>
      <Grid container spacing={2}>
        <Grid
          id={selected}
          item
          xs={12}
          sm={12}
          xl={12}
          className="project-card"
        >
          <Card id={selected} sx={{ maxWidth: 550 }} onClick={() => setOpen(true)}>
            <CardContent id={selected}>
              <CardMedia
                sx={{height: 0, paddingTop: '56.25%'}}
                image={project.main}
                title={project}
                id={selected}
              />
              <Typography id={selected} variant="h6">{project.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className="arrows" xs={2} xl={6}>
          <section className="arrow-left" onClick={(e) => handleClick(e)}>{arrow_left}</section>
          <section className="arrow-right" onClick={(e) => handleClick(e)}>{arrow_right}</section>
        </Grid>
    </Grid>
    <ProjectModal
      modalContent={project}
      handleClose={handleClose}
      open={open}
    />
    </div>
  );
}

export default Projects;