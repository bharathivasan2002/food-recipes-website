import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { IoCloseOutline } from "react-icons/io5";
import { SiFoodpanda } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import './style.css'


const Singleitem = () => {
    const { id } = useParams()

    const[singlesearch,setsinglesearch]=useState([])
    const[loading,setloading]=useState(false)

    useEffect(()=>{
      setloading(true)
      const timer = setTimeout(()=>{
        setloading(false)
        getsingleitems()
      },300)
      return()=>clearTimeout(timer)
    },[id])

    const  getsingleitems = async ()=>{
      try{
        const api =await Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setsinglesearch(api.data.meals)
      }catch(err){
        console.log(err);
      }
    }

return(
     <div>
        <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
         <div className='titlelogo' style={{margin:'10px 5px'}}><span><SiFoodpanda className='mx-2'></SiFoodpanda></span>Tasty Temptation</div>
         <NavLink to={'/'}>
          <IoCloseOutline style={{width:'30px',height:'30px',margin:'10px',color:'red'}}/>
         </NavLink>
       </div>
       <Container>
        <Row>
          <div>
        {
            loading==true&&<Spinner animation="border" variant="primary" className='my-5'/>
        }
          </div>
        <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',margin:'30px 0px 30px 0px'}}>
        {
          singlesearch.map((items)=>{
            return(
            <Col xxl={6} xl={6} lg={6} md={8}>
            <Card>
              <Card.Img variant="top" src={items.strMealThumb} />
              <Card.Body>
                <Card.Title style={{backgroundColor:'#113946',color:'#f5edde',letterSpacing:'2px',padding:'8px 0px'}}>{items.strMeal}</Card.Title>
                <div style={{fontWeight:'900',letterSpacing:'2px'}}>Food Cataegory - {items.strCategory}</div>
                <div className='ingredientscontainer'>
                     <div>Ingredients</div>
                     <p>{items.strIngredient1}</p>
                     <p>{items.strIngredient2}</p>
                     <p>{items.strIngredient3}</p>
                     <p>{items.strIngredient4}</p>
                     <p>{items.strIngredient5}</p>
                     <p>{items.strIngredient6}</p>
                     <p>{items.strIngredient7}</p>
                     <p>{items.strIngredient8}</p>
                     <p>{items.strIngredient9}</p>
                     <p>{items.strIngredient10}</p>
                     <p>{items.strIngredient11}</p>
                     <p>{items.strIngredient12}</p>
                     <p>{items.strIngredient13}</p>
                     <p>{items.strIngredient14}</p>
                     <p>{items.strIngredient15}</p>
                     <p>{items.strIngredient16}</p>
                     <p>{items.strIngredient17}</p>
                     <p>{items.strIngredient18}</p>
                     <p>{items.strIngredient19}</p>
                     <p>{items.strIngredient20}</p>
                  </div>
                     <a href={items.strYoutube} style={{textDecoration:'none',color:'#113946',fontWeight:'500'}}><span><FaYoutube style={{color:'red',fontSize:'25px',margin:'0px 8px'}}/></span>Youtube</a>
              </Card.Body>
            </Card>
            </Col>
            )
          })             
        }
        </div>
        </Row>
       </Container>

  </div>
)
}

export default Singleitem