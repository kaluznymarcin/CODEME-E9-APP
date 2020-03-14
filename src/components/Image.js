import React, { Component } from "react";
import axios from "axios";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import M from "materialize-css";
import { connect } from 'react-redux';
import { getImage } from '../redux/actions/dataActions'
import PropTypes from 'prop-types';

class Image extends Component {
  state = {
    collImage: {}
  };

  componentDidMount() {
    const { image_id } = this.props.match.params;
    console.log('Image.js: ' + image_id)
    console.log(this.props)
    this.props.getImage(image_id)
    // axios.get(`photos/${image_id}`).then(res => {
    //   this.setState({
    //     collImage: res.data
    //   });
    // });
  }

  render() {
    const { collImage } = this.state;
    const imageMarkup = collImage.urls ? (
      <img
        alt="collImage.description"
        className="responsive-img"
        src={collImage.urls.full}
      />
    ) : (
      <div className="center">Loading ...</div>
    );
    return <div>{imageMarkup}</div>;
  }
}

Image.propTypes = {
    getImage: PropTypes.func.isRequired
  };

const mapStateToProps = state => ({
    user: state.user
  });

export default connect(mapStateToProps, { getImage })(Image);