import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'wouter'

import lenguageContext from "../../context/languageContext"

import './navBar.css'
import BF from '/britishFlag.png'
import EF from '/spainFlag.png'

function NavBar() {

  const [showNavBar, setShowNavBar] = useState(false)
  const {lang, setLang} = useContext(lenguageContext)

  function toggleNavBar(){
    setShowNavBar(!showNavBar)
    const button = document.querySelector(".toggle-navBar-button")
    if(showNavBar){
      button.style.transform = "rotateZ(-90deg)"
    }
    else{
      button.style.transform = "rotateZ(0deg)"
    }
  }

  function toggleLang(event){
    const target = event.target.alt
    setLang(target)
  }

  return (
    <>
      <button className='toggle-navBar-button' onClick={toggleNavBar}>|||</button>
      {
        showNavBar 
        ? <div className='navBar-main'>
            <Link href='/' onClick={toggleNavBar}>{lang == "ES"? <a>Principal</a> : <a>Home</a>}</Link>
            <Link onClick={toggleNavBar} href='/about me'>{lang == "ES"? <a>Sobre mi</a> : <a>About me</a>}</Link>
            <Link onClick={toggleNavBar} href='/projects'>{lang == "ES"? <a>Proyectos</a> : <a>Projects</a>}</Link>
            <Link onClick={toggleNavBar} href='/contact'>{lang == "ES"? <a>Contacto</a> : <a>Contact</a>}</Link>
            <button className='ES-EN-button'>
              <img src={EF} alt="ES" className='navBar-button-flags' onClick={toggleLang}/>
              <img src={BF} alt="EN" className='navBar-button-flags' onClick={toggleLang}/>
            </button>
          </div> 
        : <></>
      }
    </>
  )
}

export default NavBar