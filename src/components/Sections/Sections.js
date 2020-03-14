import React from 'react';
import fetchSections from '../../api/fetchSections';

import GridList from '../GridList';


export default class extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetchSections({}, data => this.setState({ data }));
  }

  render() {
    return <GridList data={this.state.data} />
  }
}
