import React from 'react';

import {UNSPLASH_ACCESS_KEY} from '../../constants';
//import PropTypes from "prop-types";
import {withRouter, Link} from "react-router-dom";

import './Collection.css';

class Collection extends React.Component {
    state = {
        userName: this.props.match.params.slug,
        apiData: null,
    };


    componentDidMount() {

        const UNSPLASH_URL = `https://api.unsplash.com/collections/${this.state.userName}/photos/?client_id=${UNSPLASH_ACCESS_KEY}&page=1&per_page=100&order_by=latest`;

        fetch(UNSPLASH_URL)
            .then(res => res.json())
            .then(data => {
                return this.setState({
                    apiData: data
                })
            });
    }


    createList = () => {

        let content = [];

        if (this.state.apiData) {

            if (!this.state.apiData.errors) {
                const values = this.state.apiData;
                values.map(function (item) {

                    const {id, urls, likes} = item;
                    const random = Math.floor(Math.random()*3 ) + 1;
                    const classnames = `unsplash__item span-${random}`;
                    content.push(<div className={classnames} key={id.toString()}>
                        <Link to={`/collection/image/${id}`}>
                            <img src={urls.regular} alt=""/>
                            <span>Likes: {likes}</span>
                        </Link>
                    </div>);
                })
            } else if (this.state.apiData.errors.length > 0) {
                return this.state.apiData.errors[0];
            }
        }

        return content;
    };

    render() {

        return (
            <div className="unsplash__gallery">{this.createList()}</div>
        )
    }
}


export default withRouter(Collection);
