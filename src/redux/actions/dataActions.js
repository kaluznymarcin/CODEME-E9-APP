import {
    SET_COLL_IMAGE
  } from '../types';
  import axios from 'axios';
  
  // Get one image
  export const getImage = (image_id, dispatch) => {
    console.log('dataActions: ' + image_id)
    axios
      .get(`photos/${image_id}`)
      .then(res => {
        dispatch({
          type: SET_COLL_IMAGE,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: SET_COLL_IMAGE,
          payload: {}
        });
      });
  };

  
//   axios.get(`photos/${image_id}`).then(res => {
//     this.setState({
//       collImage: res.data
//     });