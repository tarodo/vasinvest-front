import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, IconButton, Typography} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function CurrencyCard({ currency }) {
  return (
    <Card sx={{ width: '170px', m: 1, height: '220px'}}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <IconButton color={'primary'}>
          <MoreHorizIcon />
        </IconButton>
        <IconButton color={'primary'}>
          <ClearIcon />
        </IconButton>
      </Grid>
      <CardContent sx={{ mt: 0 }}>
        <Typography variant={'h3'}>RUB</Typography>
        <Typography variant={'h4'}>71.25</Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth={true}>MAKE MAIN</Button>
      </CardActions>
    </Card>
  )
}