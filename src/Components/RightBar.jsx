import React from 'react'
import  {Users} from '../db/Friends';
import Friend from './Friend';

const RightBar = () => {
  return (
    <div className='rightBar' id='rightBar'>
        <div className='options'>
            <div>
                <p>Feed</p>
            </div>
            <div>
                <p>Chats</p>
            </div>
            <div>
                <p>Videos</p>
            </div>
            <div>
                <p>Groups</p>
            </div>
            <div>
                <p>BookMarks</p>
            </div>
            <div>
                <p>Questions</p>
            </div>
            <div>
                <p>Jobs</p>
            </div>
            <div>
                <p>Events</p>
            </div>
            <div>
                <p>Courses</p>
            </div>
        </div>
        <div className='Friends'>
            {Users.map((user) =>{
                return <Friend Class='hide' srcImg={user.profilePicture} infos={user.username}/>
            })}
        </div>
    </div>
  )
}

export default RightBar