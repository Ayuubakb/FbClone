import React from 'react'

const UserInfo = () => {
  return (
    <div className='userInfo'>
        <div className='userInformation'>
            <h1>User Information</h1>
            <p>City : New York</p>
            <p>From : Madrid</p>
            <p>Relationship : single</p>
        </div>
        <div className='userFriends'>
            <h1>User Friends</h1>
            <div className='friendContainer'>
                <div className='friend'>
                    <div>
                        <img src="assets/person/2.jpeg"/>
                    </div>
                    <h1>Joe Don</h1>
                </div>
                <div className='friend'>
                    <div>
                        <img src="assets/person/3.jpeg"/>
                    </div>
                    <h1>Joe Don</h1>
                </div>
                <div className='friend'>
                    <div>
                        <img src="assets/person/4.jpeg"/>
                    </div>
                    <h1>Joe Don</h1>
                </div>
                <div className='friend'>
                    <div>
                        <img src="assets/person/5.jpeg"/>
                    </div>
                    <h1>Joe Don</h1>
                </div>
                <div className='friend'>
                    <div>
                        <img src="assets/person/6.jpeg"/>
                    </div>
                    <h1>Joe Don</h1>
                </div>
                <div className='friend'>
                    <div>
                        <img src="assets/person/7.jpeg"/>
                    </div>
                    <h1>Joe Don</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInfo