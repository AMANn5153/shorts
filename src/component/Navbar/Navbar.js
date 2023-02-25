import React from 'react'
import AnimHeader from './AnimHeader'
import { short} from '../Extras/Arrays'


const Navbar = () => {
  return (
    <>
        <nav className='nav'>
          {short.map((val,index)=>{
            return(
              <AnimHeader
                name={val}
              />
            )
          })}
        </nav>
    </>
  )
}

export default Navbar
