import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText } from '@mui/material';
import { Link } from 'react-scroll';

const PAGES = ['home', 'skills', 'projects', 'work', 'contact'];

const HeaderDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={()=> setOpenDrawer(false)}
      >
        <List>
          {PAGES.map((page, idx) => (
            <ListItemButton onClick={() => setOpenDrawer(!openDrawer)} key={idx}>
            <ListItemIcon>
              <Link
                activeClass="active"
                key={idx}
                to={page}
                spy={true}
                smooth={true}
                offset={-125}
                duration={500}
                isDynamic={true}>
              <ListItemText>
                {page}
                </ListItemText>
                </Link>
            </ListItemIcon>
          </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{color: '#fff'}}/>
      </IconButton>
    </React.Fragment>
  );
}

export default HeaderDrawer;