import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog: { title, id, date, img, content } }) => {
  const truncatedContent = content.slice(0, 200) + '...';

  return (
    <div className='item'>
      <div className='image'>
        <Link to={`/blogs/${id}`}>
          <img className='ui image' src={img} alt='' />
        </Link>
      </div>
      <div className='content'>
        <div className='header'>{title}</div>
        <div className='meta'>{date}</div>
        <div className='description'>
          {truncatedContent}
          <Link to={`/blogs/${id}`}> Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
