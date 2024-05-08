import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../cards/Cards'
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer"
import "./NewArticle.css"



const NewArticle = () => {

  const data=useSelector(state=>state.news)
  
  return (
    <div className='article'>
    <div className="heading-new-article">
    <Navbar/>
    </div>
    <div className='body-new-article'>
    {
      data.news.map((val)=>{
        return(
          <Cards
            title={val.title.rendered}
            image={val.og_image[0].url}
            body={val.excerpt}
            time={val.date}
            author={val.author}
            link={val.link}
          />
        )
      })
    }
    </div><div className='footer-div'>
    <Footer/>
    </div>    
     </div>
  )
}

export default NewArticle
