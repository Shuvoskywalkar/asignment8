import React from 'react';
import './home.css'
import Posts from '../posts/popsts'
const home = (props) => {
    const{posts}=props
    // console.log(posts)
    return (
        <div>
            <div className="header">
        <h1>Wellcome To <br/> BuddyPost</h1>
      </div >
      <div className="floater">
      {posts.map(posted=><Posts  posts={posted}></Posts>)}
      </div>
    
   

      
        </div>
    );
};

export default home;