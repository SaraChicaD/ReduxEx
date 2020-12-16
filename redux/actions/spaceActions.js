import axios from 'axios';

import {
	SPACE_REQUEST,
	SPACE_SUCCESS,
	SPACE_FAILURE,
} from './actionTypes';

export const spaceRequest = () => {
  return {
    type: SPACE_REQUEST,
  };
};

export const spaceSuccess = (data) => {
  return {
    type: SPACE_SUCCESS,
    data
  };
};

export const spaceFailure = (error) => {
  return {
    type: SPACE_FAILURE,
    error
  };
};

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
export const fetchSpace = () => (dispatch) => {
  dispatch(spaceRequest());
  return axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then((res) => {
    	console.log(res, '************** spaaaaaaaace 8*********')
      dispatch(spaceSuccess(res));
    })
    .catch((err) => {
    	console.log(err, '************** errrrrrrrrrrrr 8*********')

      dispatch(spaceFailure(err));
    });
};

