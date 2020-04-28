import { GET_BLOGS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
