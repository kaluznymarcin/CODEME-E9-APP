import React from 'react';

import {UNSPLASH_ACCESS_KEY} from '../../constants';
import { withRouter } from "react-router-dom";

import './SingleImage.css';

class SingleImage extends React.Component {
    state = {
        pictureId: this.props.match.params.slug,
        apiData: null,
    };



    componentDidMount() {

        const UNSPLASH_URL = `https://api.unsplash.com/photos/${this.state.pictureId}/?client_id=${UNSPLASH_ACCESS_KEY}`;

        fetch(UNSPLASH_URL)
            .then(res => res.json())
            .then(data => {
                return this.setState({
                    apiData: data})});
    }


    getPhoto = () => {

        let content  = [];

        if(this.state.apiData) {

            const photo = this.state.apiData;
            const {id, alt_description, urls} = photo;

            content.push(<img src={urls.regular} alt={alt_description} data-id={id} className="unsplash__img"/>);
            return content;
        }
        else return null;
    };

    render() {
        return (<div className="unsplash__single">{ this.getPhoto() }</div>);
    }
}


export default withRouter(SingleImage);