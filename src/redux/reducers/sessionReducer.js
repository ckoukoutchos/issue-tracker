import { SET_API_KEY } from '../actionTypes';

const initialState = {
  apiKey: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_API_KEY: {
      return {
        ...state,
        apiKey: action.apiKey
      };
    }
    default:
      return state;
  }
}