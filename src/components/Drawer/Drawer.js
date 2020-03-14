import React from 'react';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import toggleShellOpen from '../../actions/toggleShellOpen';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
    padding: 21
  }
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const toggleShell = compose(dispatch, toggleShellOpen);

  const shellOpen = useSelector(state => state.shellOpen);

  return (
    <Drawer open={shellOpen} onClose={toggleShell} >
      <div
        className={classes.list}
        role="presentation"
      >
        <Link to="/">Home Page</Link>
      </div>
    </Drawer>
  )
};
