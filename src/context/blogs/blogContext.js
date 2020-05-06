import React, { createContext, useReducer } from 'react';
import blogReducer from './blogReducer';
import axios from 'axios';

const BlogStateContext = createContext();
const BlogDispatchContext = createContext();

const BlogProvider = ({ children }) => {
  const initialState = {
    blogs: [],
    blog: {},
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  return (
    <BlogStateContext.Provider value={state}>
      <BlogDispatchContext.Provider value={dispatch}>
        {children}
      </BlogDispatchContext.Provider>
    </BlogStateContext.Provider>
  );
};

//Helper Functions

const useBlogState = () => {
  const blogState = React.useContext(BlogStateContext);
  return blogState;
};

const useBlogDispatch = () => {
  const blogDispatch = React.useContext(BlogDispatchContext);
  return blogDispatch;
};

export { BlogProvider, useBlogState, useBlogDispatch };

//Action Helpers

const config = {
  headers: {
    ContentType: 'application/json',
  },
};

export const getBlogs = async (dispatch) => {
  try {
    const res = await axios.get('/api/blogs');

    dispatch({ type: 'GET_BLOGS', payload: res.data });
  } catch (err) {
    console.log('error fetching');
  }
};

export const addBlog = async (dispatch, blog) => {
  try {
    const res = await axios.post('/api/blogs', blog, config);

    dispatch({ type: 'ADD_BLOG', payload: res.data });
  } catch (err) {
    console.log('error fetching');
  }
};
