import React, { useState } from 'react';

const initialosts = [
  {
    id: 2,
    text: 'Lorem ipsum',
    user: {
      avatar: '/uploads/avatar1.png',
      username: 'Test User',
    },
  },
  {
    id: 1,
    text: 'Lorem ipsum',
    user: {
      avatar: '/uploads/avatar2.png',
      username: 'Test User 2',
    },
  },
];

const App = () => {
  const [posts, setPosts] = useState(initialosts);

  return (
    <>
      <div className='container'>
        <h1>Blog Posts</h1>
        <div className='feed'>
          {posts.map(({ id, text, user: { username, avatar } }) => (
            <div key={id} className='post'>
              <div className='header'>
                <img src={avatar} />
                <h2>{username}</h2>
              </div>
              <p className='content'>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
