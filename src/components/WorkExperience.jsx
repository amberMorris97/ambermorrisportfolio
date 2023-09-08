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
              Worked on Redfin's iBuying team to build scalable, highly-reliable, cloud-based Java microservices and React UI features in a CI/CD environment.
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
            I tutor students and junior engineers in problem-solving skills, code debugging, and the following subjects: Vanilla JavaScript, React, Redux, Node.js, Express, and ES6.
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