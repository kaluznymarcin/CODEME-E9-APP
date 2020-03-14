import React from 'react';
import fetchPhoto from '../../api/fetchPhoto';
import { withRouter } from 'react-router-dom';

import { Card, CardMedia, withStyles } from '@material-ui/core';

const styles = (theme => ({
  root: {
    maxWidth: '98%',
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
    const classes = useStyles();

    return <Card className={classes.root}>{JSON.stringify(this.state.data)}</Card>
  }
}

export default withRouter(Photo);
