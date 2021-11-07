import * as React from 'react';
import Box from '@mui/material/Box';
import CurrencyCard from "./currencyCard";
import SideBar from "../sideBar";
import {Grid, Typography} from "@mui/material";
import CurrencyEmpty from "./currencyEmpty";

export default function CurrencyPage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box>
          <Typography variant={'h3'} sx={{ mt: '30px' }}>Currencies</Typography>
          <Grid
            container
          >
              <CurrencyCard />
              <CurrencyEmpty />
          </Grid>
      </Box>
    </Box>
  );
}
