import React, { useContext } from 'react'
import {Link} from 'wouter'
import languageContext from '../../context/languageContext'

import './hero.css'

function Hero() {

  const {lang} = useContext(languageContext)

  if(lang=="ES"){
    return <div className='hero-container'>
    <h3 className='hero-title'>Hola! Yo soy Leonardo Borsetta!</h3>
    <h3 className='hero-title'>Aqui vas a poder encontrar toda mi informacion actualizada,
        mis proyectos y demas cosas.</h3>
    <h3 className='hero-title'>Gracias por visitar mi portafolio</h3>
    <Link href='/about me'><a className='hero-section-action-button'>Empezemos!</a></Link>
  </div>
  }
  else{
    return <div className='hero-container'>
      <h3 className='hero-title'>Hi! I am Leonardo Borsetta</h3>
      <h3 className='hero-title'>Here you will find all my information, projects and so on.</h3>
      <h3 className='hero-title'>Thanks for visiting my portfolio</h3>
      <Link href='/about me'><a className='hero-section-action-button'>Lets start!</a></Link>
    </div>
  }
}

export default Hero