import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const FooterButton = (props) => {
  const location = useLocation();

  const tapUrl = () => {
    location.pathname.indexOf('')
  }

  return (
    <Link to={props.url}>
      <img src={props.image}/>
      <div className='footer-text'>{props.text}</div>
    </Link>
  )
}

export default FooterButton
