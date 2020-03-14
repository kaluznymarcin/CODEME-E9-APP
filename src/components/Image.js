import React, { Component } from "react";
import axios from "axios";
import * as unsplashConsts from "../constants";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import M from "materialize-css";

class Image extends Component {
    state = {
        collImage: {}
    }

  componentDidMount() {
    const { image_id } = this.props.match.params;
    axios.get(`photos/${image_id}`).then(res => {
        this.setState({
            collImage: res.data
          });
      });
  }

  render() {
    const { collImage } = this.state
    const imageMarkup = collImage.urls && <img alt="collImage.description" className="responsive-img" src={collImage.urls.full} />;
    return (
        <div>
            {imageMarkup}
        </div>
    )
  }
}

export default Image;