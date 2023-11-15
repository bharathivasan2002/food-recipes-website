import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom'
import './style.css'


const MealCatagory = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div >
       <Button variant="primary" onClick={handleShow} className="me-2" style={{backgroundColor:'#f5edde',border:'none',color:'#3A4D39'}}>Show Catagory</Button>
        <Offcanvas show={show} onHide={handleClose} placement={'top'} style={{backgroundColor:'#113946'}}>
          <Offcanvas.Header closeButton >
            <Offcanvas.Title style={{color:'#f5edde',fontWeight:'200',textTransform:'capitalize',letterSpacing:'2px'}}>Choose your favorite food from favorite country</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='mealcatagorybody'>
            <NavLink to={'/searchcuisine/indian'}>
              india
            </NavLink>
            <NavLink to={'/searchcuisine/italian'}>
              italy
            </NavLink>
            <NavLink to={'/searchcuisine/chinese'}>
              china
            </NavLink>
            <NavLink to={'/searchcuisine/japanese'}>
            japan
            </NavLink>
            <NavLink to={'/searchcuisine/mexican'}>
            mexico
            </NavLink>
            <NavLink to={'/searchcuisine/french'}>
            french
            </NavLink>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default MealCatagory