import React from 'react'
import './Hero.css'
import profileimg from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profileimg} alt="" />
        <h1><span>Hi, I'm Ronit Khupase</span></h1>
        <h4><span>Masters in Computer Application</span><br/>MIT Arts, Commerce and Science, Alandi Pune</h4>
        <p>I'm Computer Science student with a passion for solving algorithmic challenges. I'm actively crafting projects to showcase my skills and grow as a developer.</p>
        <div className="hero-action">
            <div className="hero-contact"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact me</AnchorLink></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/129s5-XEZN80hIaM9MZP7aKNyKQxl4GY0/view?usp=drive_link">MY RESUME</a></div>
        </div>
    </div>
  )
}

export default Hero