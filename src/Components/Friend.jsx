import React from 'react'

const Friend = ({srcImg,infos,Class}) => {
  return (
    <div className='friend'>
        <div className={`buble ${Class}`}></div>
        <div className='imgContainer'>
            <img src={srcImg} alt='profilePic'/>
        </div>
        <div className='name'>
            <p>{infos}</p>
        </div>
    </div>
  )
}

export default Friend;