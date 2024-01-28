import { useEffect, useState } from 'react';
import {Link, Outlet} from 'react-router-dom';

function Nav(){
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    const [isOpen,setIsOpen]=useState(false);
    const [isOpenRightBar,setIsOpenRightBar]=useState(false);
    const [isDown,setIsDown]=useState(false);
    window.addEventListener('resize',()=>{
        setWindowWidth(window.innerWidth);
    })
    const bar=()=>{
        if(isDown){
            setIsDown(false)
        }
        setIsOpen(o => !o)
    }
    useEffect(()=>{
        if(windowWidth > 800){
            document.getElementById('options').style.height='100%';
            document.getElementById('options').style.transform='translateY(0%)';
            document.getElementById('options').style.opacity='1';
        }else{
            if(isOpen){
                document.getElementById('options').style.transform='translateY(0%)';
                document.getElementById('options').style.opacity='1';
                document.getElementById('options').style.height='50vh';
            }else{
                document.getElementById('options').style.transform='translateY(-200%)';
                document.getElementById('options').style.opacity='0';
                document.getElementById('options').style.height='0px';
            }
        }
        console.log(windowWidth)
    },[isOpen,windowWidth])
    const rightBar=()=>{
        setIsOpenRightBar(orb => !orb)
    }
    useEffect(()=>{
        if(windowWidth > 1000){
            document.getElementById('rightBar').style.width='18%';
        }else{
            document.getElementById('rightBar').style.backgroundColor='white'
            if(isOpenRightBar){
                document.getElementById('rightBar').style.width='50%';
            }else{
                document.getElementById('rightBar').style.width='0%';
            }
        }
    },[isOpenRightBar,windowWidth])
    const search=()=>{
        if(isOpen){
            setIsOpen(false)
        }
        setIsDown(orb => !orb)
    }
    useEffect(()=>{
        if(windowWidth >660){
            document.getElementById('searchBar').style.display='block'; 
            document.getElementById('searchBar').style.opacity='1';
        }else{
            if(isDown){
                document.getElementById('searchBar').style.display='block'; 
                let time1=setTimeout(()=>{
                    document.getElementById('searchBar').style.bottom='-70%';
                    document.getElementById('searchBar').style.opacity='1';
                },100)
                return ()=>{
                    clearTimeout(time1);
                }
            }else{
                document.getElementById('searchBar').style.bottom='0px';
                document.getElementById('searchBar').style.opacity='0';
                let time2=setTimeout(()=>{
                document.getElementById('searchBar').style.display='none';
                },300) 
                return ()=>{
                    clearTimeout(time2)
                }
            }
            
        }
    },[isDown,windowWidth])
    return(
        <>
        <nav>
            {windowWidth <= 1000 ? 
                <div style={{width:'40px', height:'40px'}} id='profilOptions' onClick={rightBar}>
                    <img src='assets/person/1.jpeg' style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'50%',cursor:'pointer'}}/>
                </div>
            :   null}
            <div>
                <Link to='/'><h1>AyoubSocials</h1></Link>
            </div>
            <div>
                <i class="fa-solid fa-magnifying-glass fa-lg" style={{color: "#ffffff",cursor:'pointer'}} id='search' onClick={search}></i>
                <input type='text' name='searchBar' id="searchBar" placeholder='search for friend, post or video'/>
            </div>
            <div className='optionsContainer' >             
                <div className='bars' id='bar' onClick={bar}>
                    {isOpen?<i class="fa-solid fa-x fa-lg" style={{color: "#ffffff;"}}></i>:<i class="fa-solid fa-bars fa-lg" style={{color: "#ffffff;"}}></i>}
                </div>
                <div className='options' id='options'>
                    <div>
                        <ul>
                            <Link to='FbClone/Home'><li>HomePage</li></Link>
                            <Link to='FbClone/'><li>TimeLine</li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><i class="fa-solid fa-right-from-bracket" style={{color: "#ffffff;"}}></i></li>
                            <li><i class="fa-regular fa-message"></i></li>
                            <li><i class="fa-solid fa-bell" style={{color: "#ffffff;"}}></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Nav;