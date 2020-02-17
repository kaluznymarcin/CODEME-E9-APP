import React, { Component } from 'react'
import axios from 'axios'
import * as unsplashConsts from '../constants'
import { Link } from 'react-router-dom'

class Collection extends Component {

    state = {
        collImages: []
    }

    componentDidMount(){
        console.log(this.props)
        let id = this.props.match.params.collection_id
        axios.get(unsplashConsts.SINGLE_COLLECTION + id + unsplashConsts.COLLECTION_ORDER_ACCESS)
            .then(res => {
            this.setState({
                collImages: res.data // could be: res.data.slice(0, 10)
            })
            console.log(res)
        });
    }

    render () {
        const { collImages } = this.state;
        const imageList = collImages.length ? (
          collImages.map(collImage => {
            return (
              <div key={collImage.id} className="row">
                <div className="col s12 m7">
                  <div className="card medium">
                    <div className="card-image">
                      <img className="responsive-img" src={collImage.urls.thumb} />
                      <span className="card-title">{collImage.title}</span>
                    </div>
                    <div className="card-content">
                      <p>{collImage.description ? collImage.description : 'Descritpion is missing ...'}</p>
                    </div>
                    <div className="card-action">
                      <Link to={'/' + collImage.id}>Open this collection ...</Link> {/* collImage.title.toLowerCase() + '_' + */}
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