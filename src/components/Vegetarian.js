import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Axios from 'axios'
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import './style.css'


const Vegetarian = () => {
  const settings = {
    dots: true,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 3000,
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

  const[Vegetarianmeals,setvegetarianmeals]=useState([])

  useEffect(()=>{
    getvegetarianmeals()
  },[])
  const  getvegetarianmeals = async ()=>{
    const api =await Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=italian`)
    setvegetarianmeals(api.data.meals)
  }

  return (
    <div className='popularcontainer'>
    <Container>
    <div className='text-start text-muted my-4' style={{letterSpacing:'2px',fontSize:'20px',fontWeight:'500'}}>Trending Dish</div>
     <Slider {...settings}>
          {
            Vegetarianmeals.map((items)=>{
            const title = items.strMeal.substring(0,15)
              return(
                <NavLink to={`/singleitem/${items.idMeal}`} className='text-decoration-none' key={items.idMeal}>
                <div>
                  <Card className='vegcardcontainer mx-1'>
                    <img src={items.strMealThumb}/>
                    <span className='vegspan'></span>
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

export default Vegetarian