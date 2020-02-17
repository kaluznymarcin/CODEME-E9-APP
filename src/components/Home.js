import React, { Component } from 'react';
import axios from 'axios'
import * as unsplashConsts from '../constants'

class Home extends Component {

  state = {
    collImages: []
  }

  componentDidMount(){
    axios.get(unsplashConsts.UNSPLASH_COLLECTIONS_URL)
      .then(res => {
        console.log(res);
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
              <div className="card medium">
                <div className="card-image">
                  <img className="responsive-img" src={collImage.cover_photo.urls.thumb} />
                  <span className="card-title">{collImage.title}</span>
                </div>
                <div className="card-content">
                  <p>{collImage.description ? collImage.description : 'Descritpion is missing ...'}</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
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

export default Home;