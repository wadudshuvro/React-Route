import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';

function App() {

  return (
    <Grid container>
      <Navbar />
      <Outlet /> //Outlet - A component that renders the next match in a set of matches.
    </Grid>
  );
}

export default App;
