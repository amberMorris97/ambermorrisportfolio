import React, { useState } from 'react';
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme, } from '@mui/material';
import { Link } from 'react-scroll';
import HeaderDrawer from './HeaderDrawer.jsx';
const PAGES = ['home', 'skills', 'projects', 'work', 'contact'];

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="header">
      { isMatch ? (
         <>
         <Typography>AMBER MORRIS</Typography>
         <HeaderDrawer />
       </>
      ) :
      PAGES.map((page, idx) => (
        <Link
          activeClass="active"
          key={idx}
          to={page}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          isDynamic={true}>
          {page}
        </Link>))
      }
    </div>
  );
}

export default Header;