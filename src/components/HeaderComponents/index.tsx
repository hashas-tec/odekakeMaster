import React from 'react'
import { Image } from 'react-bootstrap'
import GearButton from './GearButton'
import LogoText from '../../assets/logo_text.svg'

const HeaderComponents = (props) => {

  const displayHeaderItem = () => {
    if(props.text === 'おでかけマスター') {
      return (
        <>
          <GearButton />
          <Image src={LogoText} />
          <div className='header-space'/>
        </>
      )
    }
  }

  return (
    <div className='header'>
      {displayHeaderItem()}
    </div>
  )
}

export default HeaderComponents
