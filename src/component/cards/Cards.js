import React from 'react'
import "./Card.css"
import DOMPurify from 'isomorphic-dompurify'
import TimeStamp from '../Extras/TimeStamp'
import { NavLink } from 'react-router-dom'

const Cards = ({title,image,body,time,author,link}) => {
  const entites={
    "&#8216;":"'",
    "&#8217;":"'"
  }

  title=title.replace(/&([^;]+);/g, (m) => entites[m])

  const cleanBody=DOMPurify.sanitize(body.rendered);
  return (
    <>
    <NavLink to={link}>
    <div className='card-news'>
    <div className='cards'>
      <div  className='card-head'>
        <h3>{title}</h3>
      </div>
        <div className='card-img'>
          <img src={image} alt='cant load image'/>
          <i>posted by:-{author}</i><br/><br/>
          <TimeStamp postTime={time}/>
        </div>
    </div>
    <div className='card-body' dangerouslySetInnerHTML={{__html:cleanBody}} >
    </div>
    </div>
    </NavLink>
  </> 
  )
}

export default Cards
