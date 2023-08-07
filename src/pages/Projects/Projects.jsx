import React, { useContext, useEffect } from 'react'
import {Link} from 'wouter'

import SingleProject from '../../components/proyects/SingleProject'
import ProjectsText from '../../JSONS/ProjectsText.json'

import LenguageContext from '../../context/languageContext'

import './Projects.css'


function Projects() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const {lang} = useContext(LenguageContext)

  return (
    <section className='project-section-container'>
      <h2 className='hero-title'>{lang == "ES" ? "Mis proyectos" : "My projects"}</h2>
      {
        ProjectsText.Projects.map((t)=>{
          return (
            <SingleProject prop = {t} key={t.i}/>
          )
        })
      }
      <Link href='/contact'><button className='hero-section-action-button projects'>{lang == "ES" ? "Contactarme" : "Contact Me"}</button></Link>
    </section>
  )
}

export default Projects