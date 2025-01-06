import React from 'react'
import './Hero.css'
import img from '../../assets/hero_furniture.jpg'

const Hero=()=> {
  return (
    <div>
        <div className="hero">
            <img src={img} alt="hero_img" />
            <div className="hero_text"></div>
        </div>
    </div>
  )
}

export default Hero