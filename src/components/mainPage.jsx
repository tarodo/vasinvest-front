import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideBar from './sideBar';

export default function MainPage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default' }}
      >
        <Typography variant="h5" my={2} ml={3} sx={{ textAlign: 'left' }}>Hi!</Typography>
      </Box>
    </Box>
  );
}
