import React from 'react';
import fetchPhoto from '../../api/fetchPhoto';
import { withRouter } from 'react-router-dom';


class Photo extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    fetchPhoto(params, data => { console.log(data); return this.setState({ data }); });
  }

  render() {
    return <div className="photo">
      {JSON.stringify(this.state.data)}
    </div>
  }
}

export default withRouter(Photo);
