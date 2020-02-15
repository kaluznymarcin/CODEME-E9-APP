import React from 'react';
import fetchSections from '../../api/fetchSections';

export default class extends React.Component {
  state = {
    data: null
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchSections(data => this.setState({ data }));
  }

  render() {
    return <div>
      {JSON.stringify(this.state.data)}
    </div>
  }
}
