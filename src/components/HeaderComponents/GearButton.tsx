import React from 'react'
import gearWhite from '../../assets/gear-white.svg'

const GearButton = () => {
  return (
    <button type="button" className="gear-button">
      <img src={gearWhite}/>
    </button>
  )
}

export default GearButton
