import React, { Component } from 'react'
import axios from 'axios'
import * as unsplashConsts from '../constants'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom'
import M from "materialize-css";

const Image = props => {
    const {image_id} = props.match.params
    console.log(image_id)
    return (
        <div>
            {image_id}
        </div>
    )
}

export default Image