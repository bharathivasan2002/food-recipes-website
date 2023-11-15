import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate} from 'react-router-dom'
import MealCatagory from './MealCatagory';
import { SiFoodpanda } from "react-icons/si";
import './style.css'

function Navbarcom() {
  const[searchresul,setsearchresult]=useState()
  const navigate = useNavigate()
  const handlesearch =()=>{
    navigate(`/searchresult/${searchresul}`)
  }
  
  return (
    <>
    <Navbar expand="lg" className='navbar'>
      <Container fluid className='py-md-1'>
        <Navbar.Brand href="#" style={{color:'white'}} className='titlelogo'><span><SiFoodpanda className='mx-2'></SiFoodpanda></span>Tasty Temptation</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <MealCatagory/>
          </Nav>
          <div className='d-none d-lg-block w-50'>
          <Form className="d-flex" onSubmit={(e)=>{
            e.preventDefault()
            handlesearch()
            }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setsearchresult(e.target.value)}
            />
            <button onClick={handlesearch} className='navbarbtn'>Search</button>
          </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Container fluid>
<Form className="d-flex d-lg-none my-2" onSubmit={(e)=>{
  e.preventDefault()
  handlesearch()
  }}>
  <Form.Control
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
    onChange={(e)=>setsearchresult(e.target.value)}
  />
  <button onClick={handlesearch} className='navbarbtnsecond'>Search</button>
</Form>
</Container>
</>
  );
}

export default Navbarcom;