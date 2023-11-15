import React from 'react'
import Slider from './components/slider';
import Navbarcom from './components/Navbar';
import Popularmeals from './components/Popularmeals';
import Vegetarian from './components/Vegetarian';
import Seafoods from './components/Seafoods';
import Footer from './components/Footer';
import Copyrights from './components/Copyrights';

const Home = () => {

  return (
    <div>
        <Navbarcom/> 
        <Slider/> 
        <Popularmeals/>
        <Vegetarian/>
        <Seafoods/>
        <Footer/>
        <Copyrights/>
    </div>
  )
}

export default Home