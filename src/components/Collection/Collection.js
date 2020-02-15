import React from 'react';

import {UNSPLASH_ACCESS_KEY} from '../../constants';
//import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import './Collection.css';

class Collection extends React.Component {
    state = {
        userName: this.props.match.params.slug,
        apiData: null,
    }



    componentDidMount() {

        const UNSPLASH_URL = `https://api.unsplash.com/collections/${this.state.userName}/photos/?client_id=${UNSPLASH_ACCESS_KEY}&page=1&per_page=100&order_by=latest`

        fetch(UNSPLASH_URL)
            .then(res => res.json())
            .then(data => {
                return this.setState({
                    apiData: data})});
        console.log(UNSPLASH_URL);
    }


    createList = () => {

        console.log(this.state.apiData);

        let content  = [];

        if(this.state.apiData)
        {

            const values = this.state.apiData;
            values.map(function(item){

                const { id, urls} = item;

                content.push(<div className='unsplash__item' key={id.toString()}>
                    <img src={urls.small} />
                </div>);
            })
        }

        return content;
    }

    render() {

        return  (
            <div className="unsplash__gallery">{this.createList()}</div>
        )
    }
}


export default withRouter(Collection);