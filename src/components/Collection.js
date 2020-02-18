import React, { Component } from 'react'
import axios from 'axios'
import * as unsplashConsts from '../constants'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom'
import M from "materialize-css";

class Collection extends Component {

    state = {
        collImages: []
    }

    componentDidMount(){
        let id = this.props.match.params.collection_id
        axios.get(unsplashConsts.SINGLE_COLLECTION + id + unsplashConsts.COLLECTION_ORDER_ACCESS)
            .then(res => {
            this.setState({
                collImages: res.data // could be: res.data.slice(0, 10)
            })
        });
    }

    render () {
        const { collImages } = this.state;
        const imageList = collImages.length ? (
          collImages.map(collImage => {
            return (
                <div key={collImage.id} className="row">
                    <div className="col s12 m7">
                        <div className="card large">
                            <div className="card-image">
                                <img alt="collImage.title" className="responsive-img" src={collImage.urls.thumb} />
                                <span className="card-title">{collImage.title}</span>
                            </div>
                            <div className="card-content">
                                <p>{collImage.description ? collImage.description : 'Descritpion is missing ...'}</p>
                            </div>
                            <div className="card-action">
                                Open this image ...
                            </div>
                        </div>
                    </div>
              </div>
            )
          })
        ) : (
          <div className="center">No images yet ...</div>
        )
        return (
        <div className="container">
            {imageList}
        </div>
        )
    }
}

export default Collection