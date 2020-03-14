import React from 'react';
import fetchSection from '../../api/fetchSection';
import { Link, withRouter } from 'react-router-dom';
import Card from './Card';

const list_creator = data => ((Array.isArray(data) && data) || []).map(
  ({ id, description, alt_description, urls: { thumb: image  } = {} }, index) => (
    <Link to={`/photo/${id}`} key={`s-${index}-${id}`}>
      <Card image={image} />
    </Link>
  )
);

class Section extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    fetchSection(params, data => { console.dir(data[0]); return this.setState({ data }); });
  }

  render() {
    return <div className="sections" style={{display: 'flex', flexWrap: 'wrap'}}>
      {list_creator(this.state.data)}
    </div>
  }
}

export default withRouter(Section);
