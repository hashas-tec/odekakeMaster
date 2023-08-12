import React from 'react'

const CarouseImage = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <img className='carouse-image' src={props.image}/>
    </div>
  )
}

export default CarouseImage
