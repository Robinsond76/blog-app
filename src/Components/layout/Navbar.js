import React from 'react';

const Navbar = () => {
  return (
    <div className='ui inverted menu'>
      <div className='ui container'>
        <div className='header item'>
          <a href='/'>
            <h2>
              <i className='columns icon'></i>Blog App
            </h2>
          </a>
        </div>
        <div className='right menu'>
          <a href='/' className='item'>
            Home
          </a>
          <a href='/blogs/new' className='item'>
            New Post
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
