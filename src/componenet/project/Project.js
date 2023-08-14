import React from 'react'
import images from '../../const'
import style from "./Project.module.css"

const Project = () => {
    
  return (
    <div className={style.project} id="project">
      <h3>Projects</h3>
       <div className={style.projectcontainer}>
      
        {images.map((image)=>{
            return(
                <div key={image.id} className={style.card}>
                    <img src={image.url}/>
                    <h5>{image.name}</h5>
                </div>
            )
        })}
      
        </div>
    </div>
  )
}

export default Project