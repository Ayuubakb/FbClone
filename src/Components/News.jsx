
import React, {useEffect, useState } from 'react';
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
    const handleImage=()=>{
        setNews(n=>({...n,attachement:'55'}))
    }
    useEffect(()=>{
        if( news.attachement !== ''){
            var fileDisplayArea = document.getElementById('fileDisplayArea');
            var file = document.getElementById('inputImg').files[0];
            var imageType = /image.*/;
            if (file.type.match(imageType)) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    fileDisplayArea.innerHTML = "";
                    var img = new Image();
                    img.src = reader.result;
                    fileDisplayArea.appendChild(img);
                }
                reader.readAsDataURL(file); 
            } else {
                fileDisplayArea.innerHTML = "File not supported!"
            }
        }
    },[news.attachement])
  return (
    <div className='news'>
        <div className='topNews'>
            <div className='imgContainer'>
                <img src={srcImg}/>
            </div>
            <div className='inputContainer'>
                <input type='text' placeholder={`What's on your mind ${name}?`} value={news.text} onChange={handleChange} />
            </div>
        </div>
        <div className='choices'>
            <div style={{color:"rgb(3, 109, 3)"}}>
                <label class="label">
                    <input type='file' accept='image/*|video/*' id="inputImg" onChange={handleImage}/>
                    <span><i class="fa-regular fa-image"></i>Image or Video</span>
                </label>
            </div>
            <div style={{color:"blueviolet"}}><i class="fa-solid fa-tag"></i><p>Tag</p></div>
            <div style={{color:"red"}}><i class="fa-solid fa-location-dot"></i><p>Localisation</p></div>
            <div style={{color:"blue"}}><i class="fa-regular fa-face-smile"></i><p>Feelings</p></div>
            <div><button>Share</button></div>
        </div>
         {news.attachement !== '' && <div id='fileDisplayArea'></div>}
    </div>
  )
}

export default News