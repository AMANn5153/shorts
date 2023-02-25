import React from 'react'
import {AiFillFacebook, AiFillTwitterSquare} from "react-icons/ai"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='about-us'>
      <h3 style={{margin:"20px"}}> About us</h3>
        <p>explore latest tech related news and <br/> read full article on techcrunch </p>
      </div>
      <div className='social-links'>
        <h3 style={{margin:"20px"}}>follow us on</h3>
        <ul>
            <li>
                <AiFillFacebook size={30}/>
            </li>
            <li>
                <AiFillTwitterSquare size={30}/>
            </li>
        </ul>
      </div>
      <div className='contact-us'>
        <h3 style={{margin:"20px"}}>contact us</h3>
        <p>amann5153@gmail.com</p>
        
      </div>
    </div>
  )
}

export default Footer
