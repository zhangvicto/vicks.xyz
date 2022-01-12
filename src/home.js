import './index.css';
//import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import head from './char/head.svg';
// import leftHand from './char/left_hand.svg';
// import leftLowerArm from './char/left_lower_arm.svg';
// import leftUpperArm from './char/left_upper_arm.svg';
// import lowerBody from './char/lower_body.svg';
// import upperBody from './char/upper_body.svg';
import char from './char/char.svg'
import TypeWriter from 'typewriter-effect';
import Footer from './footer'

function Home() {
  return (
    <div className="content">
      <HomeContent />
      <Animated />
      <Footer />
    </div>
  )
}

function HomeContent() {
  return (
    <div className="home-content">
      <TypeWriter className="home-content" options={{delay: 30}} onInit={(typewriter) => {
        typewriter.typeString('Hey there! My name is Victor, I am a Mechatronics/ Business student at Western University.')
        .start()
      }} />
      <CallToAction />
    </div>
  );
}

function Animated() {
  return (
    <div className="animated-container">
      <Char />
      <div className="shadow-container">
        <div className="back-shadow"></div>
      </div>
      
    </div>
  )
}

// class Body extends Component {
//   render() {
//     return (
//       <div className="char-body">
//         <img className="char-head" src={head} alt="head" />
//         <img className="char-lower-body" src={lowerBody} alt="lower body" />
//         <img className="char-upper-body" src={upperBody} alt="upper body" />
//         <img className="char-left-hand" src={leftHand} alt="left hand" />
//         <img className="char-left-lower-arm" src={leftLowerArm} alt="left lower arm" />
//         <img className="char-left-upper-arm" src={leftUpperArm} alt="left upper arm" />
//         <div className="char-shadow"></div>
//       </div>
//     )
//   }
// }

const Char = () => {
  return (
    <div className="char-container">
      <img className="character" alt="character" src={char} />
    </div>
  )
}


function CallToAction() {
  return (
    <button className="cta-button">
      <NavLink to='/projects'>Click for My Projects</NavLink>
      <div className="button-arrow"></div>
    </button>
  )
}

export default Home;
