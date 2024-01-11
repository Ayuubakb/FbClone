import React, { useState } from 'react';

const News = ({srcImg,name}) => {
    const [news,setNews]=useState({
                                    text:'',
                                    attachement:'',
                                    Localisation:'',
                                    Feelings:''
                                    });
    const handleChange=(e)=>{
        setNews(n => ({...n,text:e.target.value}));
    }
    /*const handleClick=(e)=>{
        if(news.text !== '' && news.Feelings !== '' && news.attachement !== '' && news.Feelings !== ''){
            
        }
    }*/
  return (
    <div className='news'>
        <div className='topNews'>
            <div className='imgContainer'>
                <img src={srcImg}/>
            </div>
            <div className='inputContainer'>
                <input type='text' placeholder={`What's on your mind ${name}?`} value={news.text} onChange={handleChange} />
            </div>
            {news.attachement !== '' && <div></div>}
        </div>
        <div className='choices'>
            <div>
                <label class="label">
                    <input type='file' accept='image/*|video/*'/>
                    <span>Image or Video</span>
                </label>
            </div>
            <div><p>Tag</p></div>
            <div><p>Localisation</p></div>
            <div><p>Feelings</p></div>
            <div><button>Share</button></div>
        </div>
    </div>
  )
}

export default News