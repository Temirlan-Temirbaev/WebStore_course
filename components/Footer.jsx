import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Store name All rights reserved</p>
      <p className='icons' style={{'cursor' : 'pointer'}}>
          <AiFillInstagram />
          <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer