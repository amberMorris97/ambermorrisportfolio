import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText } from '@mui/material';

const PAGES = ['home', 'skills', 'projects', 'work experience', 'contact'];

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
              <ListItemText>{page}</ListItemText>
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