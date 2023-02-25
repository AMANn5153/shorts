import React from "react"
import "./Animation.css"
import loadString from "./Arrays.js"
import Animation from "./Animation.js"

const Loading = () => {
    return (
      <>
          <div className='Hum-div-styl'>
          <div
          style={{display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
          }}
          >
              {loadString.map((val,index)=>{
                  return(
                      <Animation
                          name={val}
                          key={index}
                      />
                  )
              })}
          </div>
          </div>
      </>
    )
  }


export default Loading;