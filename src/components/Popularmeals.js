import React, { useState,useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Axios from 'axios'
import { NavLink } from 'react-router-dom';
import './style.css'


const Popularmeals = () => {
  const settings = {
    dots: true,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const[populardish,setpopulardish]=useState([])
  useEffect(()=>{
    getpopularmeals()
  },[])
  const getpopularmeals = async ()=>{
    const api = await Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=indian`)
    setpopulardish(api.data.meals)
  }
  
  return (
    <div className='popularcontainer'>
    <Container>
    <div className='text-start text-muted my-4' style={{letterSpacing:'2px',fontSize:'20px',fontWeight:'500'}}>Popular Dish</div>
     <Slider {...settings}>
          {
            populardish.map((items)=>{
            const title = items.strMeal.substring(0,15)
              return(
                <NavLink to={`/singleitem/${items.idMeal}`} className='text-decoration-none' key={items.idMeal}>
                <div>
                  <Card className='popcardcontainer mx-1'>
                    <img src={items.strMealThumb}/>
                    <span className='popspan'></span>
                    <div style={{position:'absolute',bottom:'10px',left:'20px',color:'white',letterSpacing:'2px',fontWeight:'500'}}>{title.length>=15?`${title}...`:title}</div>
                  </Card>
                </div>
                </NavLink>
              )
            })
          }
      </Slider>
    </Container>
    </div>
  )
}

export default Popularmeals