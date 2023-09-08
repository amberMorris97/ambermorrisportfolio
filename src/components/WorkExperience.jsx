import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WorkExperience = () => {

  return (
    <div className="work-experience" name="work">
      <h1>Work Experience</h1>
      <section className="accordion-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Full-Stack Developer @ Redfin (2021 - 2022) </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Developed applications and microservices for Redfin's iBuying team.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>JavaScript/React Tutor (2021 - present) </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I help beginner developers learn vanilla JavaScript and how to build React applications.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Freelance Developer (2021) </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I built and maintain a fullstack application for a business professional.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  );
};

export default WorkExperience;