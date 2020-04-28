import React, { useReducer } from 'react';
import axios from 'axios';
import blogContext from './blogContext';
import blogReducer from './blogReducer';
import { GET_BLOGS } from '../types';

// import {
//   GET_BLOGS
//   // GET_BLOG,
//   // ADD_BLOG,
//   // UPDATE_BLOG,
//   // DELETE_BLOG,
// } from '../types';

//State
const BlogState = (props) => {
  const initialState = {
    blogs: [],
    blog: {},
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  //actions

  //get all blogs
  const getBlogs = async () => {
    try {
      const res = await axios.get('/api/blogs');

      dispatch({
        type: GET_BLOGS,
        payload: res.data,
      });
    } catch (err) {
      console.log('error fetching');
    }
  };

  return (
    <blogContext.Provider
      value={{
        ...state,
        getBlogs,
      }}
    >
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
