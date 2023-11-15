import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { NavLink, useParams } from 'react-router-dom';
import Axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import { IoCloseOutline } from "react-icons/io5";
import { SiFoodpanda } from "react-icons/si";
import './style.css'


const Searchfirstletter = () => {
    const { id } = useParams()
    const[cuisineresult,setcuisineresult]=useState([])
    const[loading,setloading]=useState(false)
    const[search,setsearch]=useState('')
  useEffect(()=>{
      setsearch(id)
  },[])

    useEffect(()=>{
      setloading(true)
      const timer = setTimeout(()=>{
        setloading(false)
        getsearchitems()
      },500)
      return()=>clearTimeout(timer)
    },[search])

    const  getsearchitems = async ()=>{
      try{
        const api =await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        setcuisineresult(api.data.meals)
      }catch(err){
        console.log(err);
      }
    }
if(cuisineresult === null){
  return(
    <p>not found</p>
  )
}
else if(cuisineresult === cuisineresult.length<=0){
  return(
    <p>not found</p>
  )
}
else{
  return (
    <div style={{backgroundColor:'#f5edde',height:'100%'}}>   
        <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
        <div className='titlelogo' style={{margin:'10px 5px'}}><span><SiFoodpanda className='mx-2'></SiFoodpanda></span>Test Temptation</div>
        <NavLink to={'/searchresult/:'}>
         <IoCloseOutline style={{width:'30px',height:'30px',margin:'10px',color:'red'}}/>
        </NavLink>
      </div>
      <Container>           
      {
        loading==true&&<Spinner animation="border" variant="primary" className='my-5'/>
      }
        <Row>
          {
            cuisineresult.map((items)=>{
              const title = items.strMeal.substring(0,15)
            return(
            <Col lg={3} md={4} sm={6} key={items.idMeal}>
            <NavLink to={`/singleitem/${items.idMeal}`} className='text-decoration-none'>
            <Card className='my-2 searchcardcontainer' >
                <img src={items.strMealThumb}/>
                <span className='searchcuisinespan'></span>
                <div style={{position:'absolute',bottom:'10px',left:'20px',color:'white',fontSize:'20px'}}>{title.length>=15?`${title}...`:title}</div>
            </Card>
            </NavLink>
            </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
        }
}

export default Searchfirstletter