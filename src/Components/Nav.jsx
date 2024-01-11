import {Link, Outlet} from 'react-router-dom';

function Nav(){
    return(
        <>
        <nav>
            <div>
                <Link to='/'><h1>AyoubSocials</h1></Link>
            </div>
            <div>
                <input type='text' name='searchBar' id="searchBar" placeholder='search for friend, post or video'/>
            </div>
            <div>
                <ul>
                    <Link to='/Home'><li>HomePage</li></Link>
                    <Link to='/'><li>TimeLine</li></Link>
                </ul>
            </div>
            <div>
                <ul>
                    <li><i class="fa-solid fa-user" style={{color: "#ffffff;"}}></i></li>
                    <li><i class="fa-regular fa-message"></i></li>
                    <li><i class="fa-solid fa-bell" style={{color: "#ffffff;"}}></i></li>
                </ul>
            </div>
        </nav>
        <Outlet/>
        </>
    );
}
export default Nav;