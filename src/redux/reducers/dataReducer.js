import {
    SET_COLL_IMAGE
  } from '../types';
  
  const initialState = {
    collImage: {}
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_COLL_IMAGE:
        return {
          ...state,
          collImage: action.payload
        };
      default:
        return state;
    }
  }  