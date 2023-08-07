import React, { useContext } from 'react'
import lenguageContext from '../../context/languageContext'

import './singleProject.css'

function SingleProject({prop}) {

  const {lang} = useContext(lenguageContext)

  const text = prop

  return (
    <>
      <h3 className='hero-title'>{text.name}</h3>
      <div className='project-galery'>
        <img src={text.img[0]} alt="IMG1" className='project-img-up'/>
        <img src={text.img[1]} alt="IMG2" className='project-img-up'/>
        <img src={text.img[2]} alt="IMG3" className='project-img-up'/>
      </div>
      {
        lang == "ES" ? <p className='sobremi-text'>{text.desc}</p> : <p className='sobremi-text'>{text.descEN}</p>
      }
      <a href={text.URL}>
        <button className='hero-section-action-button'>{lang == "ES" ? "Visitar" : "Visit"}</button>
      </a> 
    </>
  )
}

export default SingleProject