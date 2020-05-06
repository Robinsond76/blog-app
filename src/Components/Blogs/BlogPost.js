import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';

import {
  getBlog,
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
    blog: { title, img, content },
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
      </div>
    </Fragment>
  );
};

export default BlogPost;
