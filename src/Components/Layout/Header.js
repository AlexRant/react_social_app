import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Toolbar, Typography  } from '@material-ui/core';

export default props => 
  <div>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Excercise Database
          </Typography>
        </Toolbar>
    </AppBar>
  </div>