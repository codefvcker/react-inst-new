import React from 'react';
import logo from './logo.svg';

import Image from './components/Image'
import Avatar from './components/Avatar'
import User from './components/User'
import Post from './components/Post'



function App() {
  return (
    <div className="App">
        <Image className="post__image" circle />
        <User min name='Alex' src='https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg'/>
      <Image src={logo} alt="logo"  />
      <Post 
      className='post'
       src='https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg' 
        name='Alex'
      />
    </div>
  );
}

export default App;
