import React from 'react';

const BlogNew = () => {
  return (
    <div className='ui segment'>
      <div className='ui huge header'>New Blog</div>
      <form className='ui form'>
        <div className='field'>
          <label>Title</label>
          <input type='text' name='title' placeholder='Title' />
        </div>
        <div className='field'>
          <label>Image</label>
          <input type='text' name='img' placeholder='Image' />
        </div>
        <div className='field'>
          <label>Content</label>
          <textarea name='content'></textarea>
        </div>
        <button class='ui button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogNew;
