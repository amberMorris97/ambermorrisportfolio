import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const Skills = () => {

  return (
  <div className="skills-section">
    <h1>Technical Skills</h1>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5" component="div">Front End</Typography>
            <Typography variant="body2">
              Technologies: JavaScript, React, Redux, Reflux, GraphQL, HTML5, CSS, SASS, and Material-UI
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5" component="div">Back End</Typography>
            <Typography variant="body2">
              Technologies: Node.js, Java, Spring Boot, Python, Flask, GraphQL, MySQL, PostgreSQL, MongoDB
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5" component="div">Dev Tools</Typography>
            <Typography variant="body2">
              Technologies: AWS, Heroku, Git, JIRA, Docker, Kubernetes, Grafana
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
  );
};

export default Skills;