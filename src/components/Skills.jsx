import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { skillsDetails } from './cardDetails';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';

const Skills = () => {
  return (
  <div name="skills" className="skills-section">
    <h1>Technical Skills</h1>
    <Grid container spacing={2} id="skills-container">
      {skillsDetails.map((skill, idx) => (
        <Grid key={skill.title} item sm={6} lg={3}>
          <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h5" component="div">{skill.title}</Typography>
              <Typography variant="body2">
                {skill.description}
              </Typography>
            </CardContent>
          </Card>
      </Grid>
      ))}
      <Grid item xs={12} md={6} lg={4} className="summary-blurb">
        <Card>
          <CardContent>
            <CodeIcon />
              <Typography>I have over 2 years experience developing Fullstack Software Applications, and over 1 year experience working in a professional environment.</Typography>
            <CodeOffIcon />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
  );
};

export default Skills;