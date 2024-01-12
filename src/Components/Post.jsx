import React, { useEffect } from 'react';
import { useState } from 'react';

const Post = ({srcImg,name,datePost,caption,srcAtt,like,comment,Id}) => {
    const [likes,setLikes]=useState(like);
    const [liked,setLiked]=useState(false);
    const handleClick=(e)=>{
        liked?setLikes(li=>li-1):setLikes(li=>li+1);
        setLiked(!liked);
    }
    useEffect(
        ()=>{
            liked?document.getElementById("likeHeart"+Id).style.color='red':document.getElementById("likeHeart"+Id).style.color="#cbd8d8";
        }
    ,[liked]);

  return (
    <div className='Post'>
        <div className='headerContainer'>
           <div>
                <img src={srcImg} alt="profile" />
           </div>
            <div>
                <h1>{name}</h1>
                <p>{datePost}</p>
            </div> 
        </div>
        <div className='attContainer'>
            <div>
                <h1>{caption}</h1>
            </div>
            <div>
                <img src={srcAtt} alt="attachement" />
            </div>
        </div>
        <div className='likesComm'>
            <div>
                <i class="fa-solid fa-heart" id={"likeHeart"+Id} style={{color:"#cbd8d8"}} onClick={handleClick}></i>
                <p>{likes} people liked it</p>
            </div>
            <div>
                <p>{comment} comments</p>
            </div>
        </div>
    </div>
  )
}

export default Post