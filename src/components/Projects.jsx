import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";

import JaneRosenzweig from './projectPages/JaneRosenzweig.jsx';
import Landing from './Landing.jsx';

const Projects = () => {
  return (
    <div className="project-section">
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
              <Link to="/jane-roszensweig-DEI-professional">
                <Typography>
                  Jane Rosenzweig
                </Typography>
              </Link>
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
            <Link to="/dig-it">
              <Typography>
                Dig It
              </Typography>
            </Link>
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
            <Link to="/blockchains-explained">
              <Typography>
                Blockchains Explained
              </Typography>
            </Link>
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
            <Link to="/unshiftly">
              <Typography>
                Unshiftly
              </Typography>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
  )
}

export default Projects;