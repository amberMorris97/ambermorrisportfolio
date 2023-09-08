import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { workDetails } from './cardDetails';

const WorkExperience = () => {

  return (
    <div className="work-experience" name="work">
      <h1>Work Experience</h1>
      <section className="accordion-container">
        {workDetails.map((workItem, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panella-content"
              id="panella-header"
              >
                <Typography>{workItem.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{workItem.details}</Typography>
              </AccordionDetails>
          </Accordion>
        ))}
      </section>
    </div>
  );
};

export default WorkExperience;