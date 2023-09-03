import React, { useState } from 'react';
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme } from '@mui/material';
import HeaderDrawer from './HeaderDrawer.jsx';
const PAGES = ['home', 'skills', 'projects', 'work experience', 'contact'];

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="header">
      <AppBar sx={{background: '#000000'}}>
        <Toolbar>
          {
            isMatch ? (
              <>
                <Typography>AMBER MORRIS</Typography>
                <HeaderDrawer />
              </>
            ) :
                <Tabs
                value={value}
                onChange={(e, value) => setValue(value)}
                textColor="inherit"
                indicatorColor="secondary"
              >
                {PAGES.map((page, idx) => (
                  <Tab key={page} label={page} />
                ))}
              </Tabs>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;