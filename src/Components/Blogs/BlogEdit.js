import React, { useEffect } from 'react';
import {
  getBlog,
  updateBlog,
  useBlogState,
  useBlogDispatch,
} from '../../context/blogs/blogContext';

const BlogEdit = (props) => {
  const blogId = props.match.params.id;
  const blogDispatch = useBlogDispatch();

  useEffect(() => {
    getBlog(blogDispatch, blogId);

    return () => {
      blogDispatch({ type: 'CLEAR_BLOG' });
    };
  }, [blogDispatch, blogId]);

  const { blog: current } = useBlogState();

  const [blog, setBlog] = React.useState({
    id: current.id,
    title: current.title,
    img: current.img,
    content: current.content,
    date: '05-07-2020',
  });

  const { title, img, content } = blog;

  const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    updateBlog(blogDispatch, blog);
    props.history.push(`/blogs/${blog.id}`);
  };

  return (
    <div className='ui segment'>
      <div className='ui huge header'>Edit Blog</div>
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

export default BlogEdit;
