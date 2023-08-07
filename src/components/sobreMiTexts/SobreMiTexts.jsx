import React, {useContext, useState} from 'react'
import SobreMiJSON from '../../JSONS/SobreMi.json'
import lenguageContext from '../../context/languageContext'
import IMG1 from '/IMG1Galery.jpg'
import IMG2 from '/IMG2Galery.jpg'
import IMG3 from '/IMG3Galery.jpg'
import IMG4 from '/IMG4Galery.jpg'
import IMG5 from '/IMG5Galery.jpg'

function SobreMiTexts() {

  const imgs = ["",IMG5,IMG4,IMG3,IMG2,IMG1]

  const {lang} = useContext(lenguageContext)

  const edad = parseInt((new Date().getTime() - new Date(97, 2, 10).getTime())/1000/60/60/24/365)
  let index = 0

  if(lang == "ES") return (
    <ul>
      <li>
        <p className='sobremi-text'>Mi nombre es Leonardo Borsetta y tengo {edad} años. Soy de San Carlos de Bariloche, Argentina</p>
      </li>
      {SobreMiJSON.text.map((texts)=>{
        index++
        const x = imgs[index].toString()
        return (
          <li key={x}>
            <img src={imgs[index]} alt='img${index}' className="galery-img"/>
            <p className='sobremi-text'>{texts}</p>
          </li>
        )
      })}
    </ul>
  )
  if(lang == "EN") return (
    <>
    <p className='sobremi-text'>My name is Leonardo Borsetta and I am  {edad} old. I am from San Carlos de Bariloche, Argentina</p>
      {SobreMiJSON.textEN.map((texts)=>{
        index++
        return (
          <>
            <img src={imgs[index]} alt='img${index}' className="galery-img"/>
            <p className='sobremi-text' key={index}>{texts}</p>
          </>
        )
      })}
    </>
  )
}

export default SobreMiTexts