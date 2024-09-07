import React from "react";
import './Hero.css'
import profile from '../../assets/pp.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import res from '../../assets/r.pdf'


const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile} />
            <h1><span>I'm Jagathees,</span> FullStack Developer based in India</h1>
            <p>I am a FullStack Developer from India, with beginner level of experince</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
                <div className="hero-resume">
                    <a href={res} target="_blank" >My Resume</a></div>
            </div>
        </div>
    )
}

export default Hero;