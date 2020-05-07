import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

import {
  getBlog,
  deleteBlog,
  useBlogState,
  useBlogDispatch,
} from '../../context/blogs/blogContext';

const BlogPost = ({ match }) => {
  const blogId = match.params.id;
  const blogDispatch = useBlogDispatch();

  useEffect(() => {
    getBlog(blogDispatch, blogId);

    return () => {
      blogDispatch({ type: 'CLEAR_BLOG' });
    };
  }, [blogDispatch, blogId]);

  const {
    blog: { title, img, content, id },
    isLoading,
  } = useBlogState();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className='ui segment'>
        <div className='ui huge header'>{title}</div>
        <img src={img} alt='' className='ui large image' />
        <div>{content}</div>
        <div className='ui divider'></div>
        <Link to={`/`}>Back </Link>
        <Link to={`/blogs/${id}/edit`}>| Edit </Link>
        <Link to='/'>
          <span onClick={() => deleteBlog(blogDispatch, id)}>| Delete</span>
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPost;
