import React from 'react'
import images from '../../const'
import style from "./Project.module.css"

const Project = () => {
    
  return (
    <div className={style.project} id="project">
      <div className={style.heading}>
        <h1>Project</h1>
        </div>
      <div className={style.box}>
        {
          images.map((item)=>{
            return(
              <div className={style.card}>
                <img src={item.url}/>
              </div>
            )
          })
        }
      </div>
    
    </div>
  )
}

export default Project