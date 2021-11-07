import React, {useState} from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export default function CurrencyEmpty() {
  const [addNew, setAddNew] = useState(false)

  const doNewCurrency = () => {
    setAddNew(!addNew)
  }

  return (
    <Card sx={{ width: '170px', m: 1, height: '220px' }}>
      {addNew
        ? <Grid
          sx = {{height: '100%', width: '100%'}}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <CardContent sx={{ mt: 0, py: 0 }}>
            <TextField margin="dense" id="code" label="Code" variant="standard" size="small" />
            <TextField margin="dense" id="name" label="Name" variant="standard" size="small" />
            <FormControlLabel control={<Checkbox />} label="Main" sx={{ mt: 1}} />
          </CardContent>
          <CardActions sx={{ width: '100%'}}>
            <Grid container>
              <Grid item xs={6}>
                <Button fullWidth={true}>SAVE</Button>
              </Grid >
              <Grid item xs={6}>
                <Button fullWidth={true} onClick={doNewCurrency}>Cancel</Button>
              </Grid >
            </Grid>
          </CardActions>
        </Grid>
        : <CardContent sx={{ height: '100%'}}>
        <Grid
          sx={{ height: '100%'}}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton color={'primary'} onClick={doNewCurrency} >
            <AddCircleOutlineIcon fontSize={'large'}/>
          </IconButton>
        </Grid>
        </CardContent>}
    </Card>
  )
}
