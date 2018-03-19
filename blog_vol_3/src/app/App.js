import React from 'react';
import posts from './blog_posts/posts.js';
import '../App.css';
import Header from './partials/header.js'
import  Main from './blog_posts/main.js'

const info = posts.postsData;
const App = (props) => {
    return (
      <div>
          <Header className='nav-extended' name='Blog App'/>
          <Main info={info}/> 
      </div>
    );
  }

export default App;
