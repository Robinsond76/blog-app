import React from 'react';

const BlogItem = ({ blog: { title } }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default BlogItem;
