import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { skillsDetails } from './cardDetails';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';

const Skills = () => {
  console.log(skillsDetails)
  return (
  <div name="skills" className="skills-section" id="skills-container">
    <h1>Technical Skills</h1>
    <Grid container spacing={2}>
      {skillsDetails.map((skill, idx) => (
        <Grid key={skill.title} item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h5" component="div">{skill.title}</Typography>
              <Typography variant="body2">
                Technologies: {skill.items.map((skillItem) => (
                  skillItem
                ))}
              </Typography>
            </CardContent>
          </Card>
      </Grid>
      ))}

      {/* </Grid>
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
      </Grid> */}
    </Grid>
    <div className="summary-blurb">
      <CodeIcon />
        <p> I have over two years experience being cool fun and awesome</p>
      <CodeOffIcon />
    </div>
  </div>
  );
};

export default Skills;