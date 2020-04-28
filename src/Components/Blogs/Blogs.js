import React, { Fragment, useContext, useEffect } from 'react';
import BlogContext from '../../context/blogs/blogContext';

const Blogs = () => {
  const blogContext = useContext(BlogContext);

  const { blogs, getBlogs } = blogContext;

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Fragment>
      {blogs.map((blog) => (
        <h2>{blog.title}</h2>
      ))}
    </Fragment>
  );
};

export default Blogs;
