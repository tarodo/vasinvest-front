import React from 'react';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import UserBar from './userBar';

const drawerWidth = 220;

export default function SideBar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: grey[50],
          borderRight: 0,
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box component="div">
        <Typography variant="h5" noWrap sx={{ textAlign: 'left' }} mt={1} ml={2} component="div">
          Portfolio Diary
        </Typography>
        <List>
          {['Currency'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
      <UserBar avatar_name="CD" email="roman.v" />
    </Drawer>
  );
}
