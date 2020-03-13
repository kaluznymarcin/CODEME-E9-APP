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
            const {id, alt_description, urls, downloads, likes} = photo;
            

            content.push(<img src={urls.regular} alt={alt_description} data-id={id} className="unsplash__img"/>);
            

            return content 
        }
        else return null;
    };

    likes_downloads = () => {
        let content = []

        if(this.state.apiData){
            
            const like_download = this.state.apiData
            const {likes, downloads} = like_download
            
            content.push(<span className="unsplash__Likes_Downloads">Likes: {likes} Downloads: {downloads}</span>)

            return content
        }

    }

    render() {
    return (<div className="unsplash__single">{ this.getPhoto() }{ this.likes_downloads() }</div>);
    }
}


export default withRouter(SingleImage);
