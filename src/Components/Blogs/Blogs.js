import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import {
  useBlogState,
  useBlogDispatch,
  getBlogs,
} from '../../context/blogs/blogContext';
import BlogItem from './BlogItem';

const Blogs = () => {
  const blogState = useBlogState();
  const blogDispatch = useBlogDispatch();

  const { blogs, isLoading } = blogState;

  useEffect(() => {
    getBlogs(blogDispatch);
  }, [blogDispatch]);

  if (isLoading) {
    return <Spinner />;
  }

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
