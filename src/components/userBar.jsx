import React from 'react';
import {
  Avatar, Divider, Grid, IconButton, Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router';

export default function UserBar({ email, avatar_name }) {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.replace('/login');
  };

  return (
    <Box container component="div" alignItems="flex-end">
      <Divider />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: '8px 0px 8px 16px' }}
      >
        <Avatar
          sx={{ width: 40, height: 40 }}
        >
          {avatar_name}
        </Avatar>
        <Typography
          variant="body2"
          component="div"
          sx={{
            width: 108, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
          }}
        >
          {email}
        </Typography>
        <IconButton color="primary" aria-label="add to shopping cart" onClick={handleLogout}>
          <LogoutIcon color="secondary" />
        </IconButton>
      </Grid>
    </Box>
  );
}
