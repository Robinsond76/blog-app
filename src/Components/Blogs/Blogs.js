import React, { Fragment, useEffect } from 'react';
import {
  useBlogState,
  useBlogDispatch,
  getBlogs,
} from '../../context/blogs/BlogContext';
import BlogItem from './BlogItem';

const Blogs = () => {
  const blogState = useBlogState();
  const blogDispatch = useBlogDispatch();

  const { blogs } = blogState;

  useEffect(() => {
    getBlogs(blogDispatch);
  }, [blogDispatch]);

  return (
    <Fragment>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </Fragment>
  );
};

export default Blogs;
