import React from 'react';
import fetchSection from '../../api/fetchSection';
import { Link, withRouter } from 'react-router-dom';

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

class Section extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetchSection(data => { console.dir(data[0]); return this.setState({ data }); }, {
      id: this.
    });
  }

  render() {
    return <div className="sections">
      {list_creator(this.state.data)}
    </div>
  }
}

export default withRouter(Section);
