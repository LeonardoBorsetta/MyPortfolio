import React from 'react'

import './singleContact.css'

function SingleContact({params}) {
  const {type , info, href} = params

  return (
      <article>
        <a href={href} className='CA'>
          <img src="" alt={type}/>
          <h4>{info}</h4>
        </a>
      </article>
  )
}

export default SingleContact