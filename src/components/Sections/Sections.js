import React from 'react';
import fetchSections from '../../api/fetchSections';
import { Link } from 'react-router-dom';

import './style.css';

const list_creator = data => ((Array.isArray(data) && data) || []).map(
  ({ id, title, total_photos, cover_photo: { urls: { thumb: image  } = {} } = {} }, index) => (
    <Link to={`/section/${id}`} key={`s-${index}-${id}`}>
      <div>
        {image && <img src={image} alt="" />}
      </div>
    </Link>
  )
);

export default class extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetchSections({}, data => this.setState({ data }));
  }

  render() {
    return <div className="sections">
      {list_creator(this.state.data)}
    </div>
  }
}
