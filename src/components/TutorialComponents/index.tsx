import React from 'react'
import { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import CarouseImage from './CarouseImage'
import InakaImage from '../../assets/inaka_sample.jpg';
import firendsImage from '../../assets/friends_sample.jpg';
import skyImage from '../../assets/sky_sample.jpg';
import { updateSignInUsers } from '../../repository/usersRepository';
import { doc, onSnapshot } from "firebase/firestore"
import { db } from '../../../firebase';

const TutorialComponents = (props) => {
  const [index, setIndex] = useState(0);
  const [isSignIn, setIsSignIn] = useState(true)

  onSnapshot(doc(db, "users", props.uid), (doc) => {
    setIsSignIn(doc.get('is_show_tutorial'))
  })

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const skipButtonHandler = () => {
    updateSignInUsers(props.uid)
  }

  if(!isSignIn) {
    return (
      <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <CarouseImage image={InakaImage} text="おでかけマスターへようこそ！" />
          <Carousel.Caption>
            <h3>おでかけマスターへようこそ！</h3>
            <p>おでかけの予定を簡単に作成できます！</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <CarouseImage image={firendsImage} text="作った予定をシェアしよう！" />
          <Carousel.Caption>
            <h3>作った予定をシェアしよう！</h3>
            <p>みんなに予定を共有して、計画から楽しもう！</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <CarouseImage image={skyImage} text="予定は思い出を記録して世界中に公開できます！" />
          <Carousel.Caption>
            <h3>予定は思い出を記録して世界中に公開できます！</h3>
            <p>
              予定は感想を書いてから世界中にシェアできます。誰かの参考になるかも？
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        <Button variant="primary" onClick={skipButtonHandler}>スキップ</Button>
        </>
    )
  }
}

export default TutorialComponents
