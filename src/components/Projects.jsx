import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";

import Landing from './Landing.jsx';

const Projects = () => {
  return (
    <div className="project-section" name="projects">
      <h1>Projects</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <CardMedia
                sx={{ height: 140, width: 140 }}
                image="/static/images/placeholder.jpg"
                title="placeholder"
              />

                <Typography>
                  Jane Rosenzweig
                </Typography>
            </CardContent>
          </Card>
        </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <CardMedia
              sx={{ height: 140, width: 140 }}
              image="/static/images/placeholder.jpg"
              title="placeholder"
            />

              <Typography>
                Dig It
              </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <CardMedia
              sx={{ height: 140, width: 140 }}
              image="/static/images/placeholder.jpg"
              title="placeholder"
            />

              <Typography>
                Blockchains Explained
              </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <CardMedia
              sx={{ height: 140, width: 140 }}
              image="/static/images/placeholder.jpg"
              title="placeholder"
            />

              <Typography>
                Unshiftly
              </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
  )
}

export default Projects;