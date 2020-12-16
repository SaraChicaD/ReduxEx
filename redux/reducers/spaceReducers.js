import {
  SPACE_REQUEST,
  SPACE_SUCCESS,
  SPACE_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: {},
  error: ''
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case SPACE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case SPACE_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    }  
   case SPACE_FAILURE: {
     return {
       ...state,
       loading: false,
       error: action.error,
     };
   }  
    default:
      return state;
  }
};
