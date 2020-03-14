import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    maxWidth: 800,
    width: '100%',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const list_creator = data => ((Array.isArray(data) && data) || []).map(
  ({ id, title, total_photos, cover_photo: { urls: { thumb: image  } = {} } = {} }, index) => (
    <GridListTile key={`s-${index}-${id}`}>
      <Link to={`/section/${id}`}>
        <img src={image} alt="" />
      </Link>
    </GridListTile>
  )
);

export default ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight="auto" cols={3} className={classes.gridList}>
        {list_creator(data)}
      </GridList>
    </div>
  );
}
