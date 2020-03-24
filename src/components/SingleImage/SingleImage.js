import React from 'react';

import {UNSPLASH_ACCESS_KEY} from '../../constants';
import { withRouter } from "react-router-dom";
import Iframe from 'react-iframe'

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

            return content 
        }
        else return null;
    };

    Like_Photo = () => {
        let content = []

        if(this.state.apiData) {
            const photo = this.state.apiData;
            const {alt_description} = photo;

            content.push(
                <div id="share"><span>{alt_description}</span>
                <Iframe  src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=112&layout=button&action=like&size=large&share=true&height=65&appId" width="190" height="30" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></Iframe></div>
                )
        }
        return content
    }

    render() {
    return (<div className="unsplash__single">{ this.getPhoto() }{ this.Like_Photo() }</div>);
    }
}

export default withRouter(SingleImage);
