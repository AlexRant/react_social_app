import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
// import LeftPane from './LeftPane';
// import RightPane from './RightPane';

const styles = {
  Paper: {  padding: 20, marginTop: 10, marginBottom: 10 }
}

export default ({ exercises }) => 
  <Grid container sm>
    <Grid item sm>
      <Paper style={styles.Paper}>
      {exercises.map(([group, exercises]) =>
        <Typography>
          {group}
        </Typography>
      )}        
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        Right Panel
      </Paper>
    </Grid>
  </Grid>