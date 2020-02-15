import React from 'react';
import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from '../../../constants';

// 

const createList = (data) => ((Array.isArray(data) && data) || []).map(
    (item, index) => (
        console.log(item)
    )
);

class Sections extends React.Component {
    state = {
        apiData: null
    }

    componentDidMount() {
        fetch(`${UNSPLASH_BASE_URL}/collections?page=1&perPage=10&orderBy=latest&client_id=${UNSPLASH_ACCESS_KEY}`)
            .then(res => res.json())
            .then(data => this.setState({
                apiData: data
            }));
    }

    render() {
        return (<ul>{createList(this.state.apiData)}</ul>)
    }
}

export default Sections;