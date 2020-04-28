import React from 'react';

const BlogPost = ({ match }) => {
  const postNumber = match.params.id;

  return (
    <div className='ui container'>
      <h4>This is more info about about Blog Post #{postNumber}.</h4>
    </div>
  );
};

export default BlogPost;
