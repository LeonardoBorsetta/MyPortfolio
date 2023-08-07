import React , {useContext} from 'react'
import SingleContact from '../../components/SingleContact/SingleContact'
import lenguageContext from '../../context/languageContext'
import contactInfo from '../../JSONS/Contact.json'

function Contacto() {

  const {lang} = useContext(lenguageContext)

  const Cinfo = contactInfo;

  return (
    <>
      {lang == "ES"? <h2 className='hero-title'>Contacto</h2> : <h2 className='hero-title'>Contact</h2>}
      {Cinfo.map((i)=>{
        return (<SingleContact params = {i} key={i.type}/>)
      })}
    </>
  )
}

export default Contacto