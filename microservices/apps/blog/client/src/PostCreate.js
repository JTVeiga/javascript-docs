import React from 'react';
import axios from 'axios';

// Hooks
import { useState } from 'react';

// ---

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://posts.com/posts/create', { title });
    setTitle('');
  };

  return (
    <div className="container">
      <h1>Create Post</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
