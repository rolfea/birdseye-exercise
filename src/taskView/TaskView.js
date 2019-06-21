import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  taskNav: {
    padding: theme.spacing(2),
    height: '100vh',
    textAlign: 'center',
    flexDirection: 'column',
  },
  searchBar: {

  },
  todayTasks: {

  }
}));

function TaskView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4} direction="column">
          <Paper className={classes.taskNav}>Side Task Nav</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Search Bar</Paper>
        </Grid>
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default TaskView;