import React from 'react';
import fetchSections from '../../api/fetchSections';

import './style.css';

const list_creator = data => ((Array.isArray(data) && data) || []).map(
  ({ id, title, total_photos, cover_photo: { urls: { thumb: image  } = {} } = {} }, index) => (
    <div key={`s-${index}-${id}`}>
      {image && <img src={image} alt="" />}
    </div>
  )
);

export default class extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetchSections(data => { console.dir(data[0]); return this.setState({ data }); });
  }

  render() {
    return <div className="sections">
      {list_creator(this.state.data)}
    </div>
  }
}
