import React from 'react';
import { Users } from '../db/Friends';
import Friend from './Friend';

const SideBar = () => {
  return (
    <div className='sideBar'>
        <div className='Friends'>
            {Users.map((user)=>{
            return <Friend Class='online' srcImg={user.profilePicture} infos={user.username}/>
            })}
        </div>
    </div>
  )
}

export default SideBar;