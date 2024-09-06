import React from 'react';
import './About.css'
import profile from '../../assets/profile.jpg'
import theme from '../../assets/theme.svg'

function About() {
    return ( 
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme} alt='' />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} style={{width: '400px', height: '400px'}}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Full stack developer with solid foundation in both front-end and back-end technologies</p>
                    <p>My passion is to solve problems and create impactful software solutions</p>
                </div>
            
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"65%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Sql</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Mongodb</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>C</p><hr style={{width:"70%"}} /></div>
                </div> 
            </div>     
        </div>
{/*         
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1+</h1>
                <p>Happy clients</p>
            </div>
        </div> */}
    </div>
     );
}

export default About;