import React from 'react'
import CoverProfile from '../Components/CoverProfile'
import News from '../Components/News'
import Post from '../Components/Post'
import UserInfo from '../Components/UserInfo'

const Home = () => {
  return (
    <div className='sec'>
      <CoverProfile></CoverProfile>
      <div className='container'>
        <div className='postsandothers'>
            <News srcImg="/assets/person/1.jpeg" name='Safak'></News>
            <Post Id={1} srcImg="assets/person/1.jpeg"  name='Safak' datePost="1 hour ago" caption="Love For All, Hatred For None." srcAtt="assets/post/3.jpeg" like={61} comment={2}></Post>
        </div>
        <div className='friendsandothers'>
          <UserInfo></UserInfo>
        </div>
      </div>
    </div>
  )
}

export default Home