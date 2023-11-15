import React from 'react'
import './style.css'

const Copyrights = () => {
  const date = new Date().getFullYear()
  return (
    <div className='copyrights'>
      Copyright &copy; {date} by bharathivasan | All rights Reserved.
    </div>
  )
}

export default Copyrights