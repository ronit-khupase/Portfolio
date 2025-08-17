import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> Results-driven developer focused on solving real-world problems through clean, scalable code; currently expanding a professional portfolio and exploring opportunities across web and Android development.</p><br />
                    <p>Familiar with cybersecurity fundamentals and tools like Kali Linux, Metasploit, Wireshark, and Nmap, with working knowledge of networking protocols, IP addressing, subnetting, and the OSI model. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>C lan. & DSA</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Java & Android</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Javascript,<br />React & PHP</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Python &<br />PostgreSQL</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Cyber Security<br />& Networking</p><hr style={{width:"80%"}}/></div>
                </div>
            </div>
        </div>
        {/*<div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Years of experiance</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
        </div>*/}
   </div>
  )
}

export default About