import React from 'react';
import SideBar from '../Components/SideBar';
import News from '../Components/News';
import Post from '../Components/Post';
import {Users,Posts} from '../db/Friends';

const TimeLine = () => {
    return (
    <section className='sec'>
      <div className='middle'>
        <News srcImg="/assets/person/1.jpeg" name='Safak'/>
        {
          Posts.map(post=>{
            let img;
            let nm;
            Users.forEach(user => {
                if(user.id == post.userId){
                  img=user.profilePicture;
                  nm=user.username;
                }
            });
            return <Post  Id={post.id} srcImg={img} name={nm} datePost={post.date} caption={post.desc} srcAtt={post.photo} like={post.like} comment={post.comment} />
          })
        }
      </div>
      <SideBar/>
    </section>
  )
}

export default TimeLine;