import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Content.css';
import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from '../../../constants';

// 
const linkKey = `&client_id=${UNSPLASH_ACCESS_KEY}`;

const createList = (data) => ((Array.isArray(data) && data) || []).map(
    (item, index) => (
        
        //console.log(item.links.photos + linkKey),
        <Link key={item.id} to="/SectionsView/:id">
            <div className="section__box">
                <h2 className="section__title">{item.title}</h2>
                <img src={item.cover_photo.urls.thumb} alt="" />
            </div>
        </Link >
    )
);

class Sections extends React.Component {
    state = {
        apiData: null
    }

    componentDidMount() {
        fetch(`${UNSPLASH_BASE_URL}/collections?page=1&perPage=10&orderBy=latest` + linkKey)
            .then(res => res.json())
            .then(data => this.setState({
                apiData: data
            }));
    }

    render() {
        
        return (createList(this.state.apiData))
    }
}

export default withRouter(Sections);
//pwoinno to być w render ale nie działa: this.props.match.params.id