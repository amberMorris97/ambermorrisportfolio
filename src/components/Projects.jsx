import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';

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

import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Projects = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const project = projectDetails[activeStep];
  const maxSteps = projectDetails.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="project-section">
      <span className="section-title">
        <Typography>Projects</Typography>
      </span>
      <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'black',
            color: '#00ff29',
          }}
        >
          <Typography sx={{ 'p:cursor': 'pointer'}} onClick={() => setOpen(true)}>{project.title}</Typography>
        </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {projectDetails.map((project, index) => (
            <div key={project.title}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 800,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={project.main}
                  alt={project.title}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
      <ProjectModal
        modalContent={project}
        handleClose={handleClose}
        open={open}
      />
    </div>
  );
}

export default Projects;