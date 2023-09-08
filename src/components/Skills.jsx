import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { skillsDetails } from './content/cardDetails';
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
              <Typography>I have over 2 years of experience in developing fullstack software applications with a strong proficiency in React and JavaScript. As I'm still in the early stages of my career, I maintain a deep enthusiasm for continuous learning and expanding my skill set.
              </Typography>
            <CodeOffIcon />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
  );
};

export default Skills;