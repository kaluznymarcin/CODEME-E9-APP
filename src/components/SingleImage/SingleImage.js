import React from 'react';

import {UNSPLASH_ACCESS_KEY} from '../../constants';
import {withRouter, Link} from "react-router-dom";

import './SingleImage.scss';

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
                    apiData: data
                })
            });
    }


    getPhoto = () => {

        let content = [];

        if (this.state.apiData) {

            const photo = this.state.apiData;
            console.log(photo);
            const {id, alt_description, urls, likes, links} = photo;

            content.push(
                <figure className="unsplash__single-figure">
                    <img src={urls.regular} alt={alt_description} key={id} data-id={id} className="unsplash__img"/>
                    <figcaption className="unsplash__single-description">
                        <span className='unsplash__single-likes'>{likes} likes</span>
                        <a className='unsplash__single-link' href={links.html} target="_blank" rel="nofollow noindex">See on
                            Unsplash</a>
                    </figcaption>
                </figure>);
            return content;
        } else return null;
    };

    render() {
        return (<div className="unsplash__single">{this.getPhoto()}</div>);
    }
}


export default withRouter(SingleImage);