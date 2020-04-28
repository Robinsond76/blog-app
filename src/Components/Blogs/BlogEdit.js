import React from 'react';

const BlogEdit = ({ match }) => {
  const postNumber = match.params.id;

  return (
    <div className='ui container'>
      <h4>This is the edit page for Blog Post #{postNumber}.</h4>
    </div>
  );
};

export default BlogEdit;
