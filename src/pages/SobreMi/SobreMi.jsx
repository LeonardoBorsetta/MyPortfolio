import React, { useContext } from 'react'
import {Link} from 'wouter'

import './sobreMi.css'
import SobreMiTexts from '../../components/sobreMiTexts/sobreMiTexts'
import lenguageContext from '../../context/languageContext'

function SobreMi() {

  const {lang} = useContext(lenguageContext)

  return (
    <div className='sobremi-section'>
      {lang == "ES"? <h2 className='hero-title'>Sobre mi!</h2> : <h2 className='hero-title'>About Me!</h2>}
      <SobreMiTexts/>
      {lang == "ES" ? <Link href='/projects'><button className='hero-section-action-button proyects'>Ir a Proyectos</button></Link>
      : <Link href='/projects'><button className='hero-section-action-button proyects'>Go to Projects</button></Link>}
    </div>
  )
}

export default SobreMi