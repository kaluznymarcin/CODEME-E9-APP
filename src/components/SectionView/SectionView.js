import React from 'react';
import { Link, withRouter, useParams } from "react-router-dom";
import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from '../../constants';

// 
const linkKey = `&client_id=${UNSPLASH_ACCESS_KEY}`;
//import Content from './Content';

function SectionContainer() {
    let {id} = useParams();
    console.log({id})
    return (
        <section className="hero">
            <h1 className="section__title">{id}</h1>
        </section>
    );
}

const SectionView = (data) => (
    <section className="hero">
        <h1 className="section__title"></h1>
    </section>
)


class ChoosenSection extends React.Component {
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
        console.log(this.state.apiData)
        return (SectionView(this.state.apiData))
    }
}

export default withRouter(SectionContainer, ChoosenSection);
//<h1 className="section__title">{props}</h1>