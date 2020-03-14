import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AppBar,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import toggleShellOpen from '../actions/toggleShellOpen';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => dispatch(toggleShellOpen())}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
