import React, { Fragment, useEffect } from 'react';
import {
  useBlogState,
  useBlogDispatch,
  getBlogs,
} from '../../context/blogs/blogContext';
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
      <div className='ui huge header'>Blog Posts</div>
      <div className='ui segment'>
        <div className='ui divided items'>
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Blogs;
