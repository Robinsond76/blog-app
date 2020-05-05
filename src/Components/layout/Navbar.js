import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='ui inverted menu'>
      <div className='ui container'>
        <div className='header item'>
          <Link to='/'>
            <h2>
              <i className='columns icon'></i>Blog App
            </h2>
          </Link>
        </div>
        <div className='right menu'>
          <div className='item'>
            <Link to='/'>Home</Link>
          </div>
          <div className='item'>
            <Link to='/blogs/new'>New Post</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
