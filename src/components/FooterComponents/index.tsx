import React from 'react'
import FooterButton from './FooterButton'
import bookHalf from '../../assets/book-half.svg'
import replyFill from '../../assets/reply-fill.svg'
import personCircle from '../../assets/person-circle.svg'

function FooterComponents() {
  return (
    <div className='footer'>
      <FooterButton url='home' image={bookHalf} text="計画" />
      <FooterButton url='share' image={replyFill} text="共有" />
      <FooterButton url='mypage' image={personCircle} text="マイページ" />
    </div>
  )
}

export default FooterComponents
