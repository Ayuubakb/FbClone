import React from 'react';
import SideBar from '../Components/SideBar';
import News from '../Components/News';

const TimeLine = () => {
  return (
    <section className='sec'>
      <div className='middle'>
        <News srcImg="/assets/person/1.jpeg" name='Safak'/>
      </div>
      <SideBar/>
    </section>
  )
}

export default TimeLine;