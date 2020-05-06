import React from 'react';
import { useBlogDispatch, addBlog } from '../../context/blogs/blogContext';

const BlogNew = (props) => {
  const dispatch = useBlogDispatch();

  const [blog, setBlog] = React.useState({
    title: '',
    img: '',
    content: '',
    date: '05-04-2020',
  });

  const { title, img, content } = blog;

  const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addBlog(dispatch, blog);
    props.history.push('/');
  };

  return (
    <div className='ui segment'>
      <div className='ui huge header'>New Blog</div>
      <form className='ui form' onSubmit={onSubmit}>
        <div className='field'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            placeholder='Title'
            onChange={onChange}
          />
        </div>
        <div className='field'>
          <label>Image</label>
          <input
            type='text'
            name='img'
            value={img}
            placeholder='Image'
            onChange={onChange}
          />
        </div>
        <div className='field'>
          <label>Content</label>
          <textarea
            name='content'
            value={content}
            onChange={onChange}
          ></textarea>
        </div>
        <button className='ui button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogNew;
