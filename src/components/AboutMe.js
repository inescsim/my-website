import React from 'react';
import Experience from './Experience';
import avatar from '../files/1.png';
import cv from '../files/cv.pdf';

const AboutMe = () => {
    return (
        <div className="about-me-section">
            <div className="about-me-avatar">
                <img alt="" src={avatar}/>
                <p className="about-me-icons">
                    <a href="mailto:ines.csim@gmail.com" alt=""><i className="large at icon"></i></a>
                    <a href="https://www.linkedin.com/in/inescsim/" alt="" target="_blank" rel="noopener noreferrer"><i className="large linkedin icon"></i></a>
                    <a href="https://github.com/inescsim" alt="" target="_blank" rel="noopener noreferrer"><i className="large github icon"></i></a>
                </p>
            </div>
            <div className="about-me-subsection">
                <div className="about-me-title">
                    <h4>About</h4>
                </div>
                <div className="about-me-content">
                    <p>Hi! My name is Inês (Portuguese pronunciation: <a href="https://translate.google.com/?sl=auto&tl=pt&text=In%C3%AAs&op=translate" target="_blank" rel="noopener noreferrer">iˈneʃ</a>). I'm 28 years old and live in London, UK. I moved here in early 2019 for work.</p><p>I have a bachelor in Informatics Engineering by the <a href="https://www.uc.pt/en" target="_blank" rel="noopener noreferrer">University of Coimbra</a> and have been working as a software developer for a few years now.</p><p>My pandemic hobbies include playing Minecraft and listening to podcasts (<a href="https://softskills.audio/" target="_blank" rel="noopener noreferrer">Soft Skills Engineering</a> and <a href="https://www.nosuchthingasafish.com/" target="_blank" rel="noopener noreferrer">No Such Thing As A Fish</a> being my favorites at the moment). I've also been learning French and <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> for the past couple of months!</p>
                </div>
                <div className="about-me-divider ui divider"></div>
                <div className="experience-title">
                    <h4>Experience</h4>
                    <div className="download-cv">
                        <a href={cv} download="InesSimoesCV" className="download-cv-btn">Download CV</a>
                    </div>
                </div>
                <div className="experience-content">
                    <Experience />
                </div>
            </div>
        </div>
    )
};

export default AboutMe;