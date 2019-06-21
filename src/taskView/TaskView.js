import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';

const drawerWidth = 480;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  taskNav: {
    width: `${drawerWidth}px`,
    padding: theme.spacing(2),
    height: '100vh',
    textAlign: 'center',
  },
  search: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    // position: 'relative',
    borderRadius: theme.shape.borderRadius,    
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  }
}));

function TaskView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        <Grid item xs={4} >
          <Drawer 
            className={classes.taskNav}
            variant="permanent">
              Side Task Nav
          </Drawer>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <AppBar>
            <div className={classes.search}>              
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search' }}
              />
              </div>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}

export default TaskView;