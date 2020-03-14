import React from 'react';
import { Card, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: 280,
    height: 157,
    margin: 5
  },
  media: {
    width: '100%',
    backgroundSize: 'content'
  }
}));

export default ({ image }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia image={image} className={classes.media} />
    </Card>
  );
}
