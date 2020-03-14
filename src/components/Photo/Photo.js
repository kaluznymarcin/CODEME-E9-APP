import React from 'react';
import fetchPhoto from '../../api/fetchPhoto';
import { withRouter } from 'react-router-dom';

import { Card, CardMedia, CardContent, withStyles } from '@material-ui/core';

const styles = (theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '98%',
    width: '100%',
    margin: 'auto',
  },
  image: {
    width: '100%'
  }
}));



class Photo extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    fetchPhoto(params, data => { console.log(data); return this.setState({ data }); });
  }

  render() {
    const { classes } = this.props;
    const { description, alt_description, urls : { full: image } = {}, likes, views, downloads } = (this.state.data || {});
    return (
      (image && <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.media}
          title={alt_description}
          image={image}
        />
        <CardContent>
          Likes: {likes} | Views: { views } | Downloads: {downloads}
        </CardContent>
      </Card>) || null
    )
  }
};

export default withRouter(withStyles(styles)(Photo));
