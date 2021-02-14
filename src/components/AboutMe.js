import React from 'react';
import Experience from './Experience';
import avatar from '../files/1.png';
import cv from '../files/cv.pdf';

const AboutMe = () => {
    return (
        <div className="about-me-section">
            <div className="about-me-avatar">
                <img alt="" src={avatar}/>
            </div>
            <div className="about-me-subsection">
                <h4>About</h4>
                <div className="about-me-content">
                    <p>Hi! My name is Inês (Portuguese pronunciation: <a href="https://translate.google.com/?sl=auto&tl=pt&text=In%C3%AAs&op=translate" target="_blank" rel="noopener noreferrer">iˈneʃ</a>). I'm 28 years old and live in London, UK. I moved here in early 2019 for work.</p><p>I have a bachelor in Informatics Engineering by the <a href="https://www.uc.pt/en" target="_blank" rel="noopener noreferrer">University of Coimbra</a> and have been working as a software developer for a few years now.</p><p>My hobbies include reading and playing Minecraft. I also enjoy listening to the occasional podcast (<a href="https://softskills.audio/" target="_blank" rel="noopener noreferrer">Soft Skills Engineering</a> and <a href="https://www.nosuchthingasafish.com/" target="_blank" rel="noopener noreferrer">No Such Thing As A Fish</a> being my favorites at the moment).</p><p>At the end of 2020 I decided to add learning French and <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> to the list - this website is a result of the latter. So far it has allowed me to learn about React, CSS and Flexbox, and GitHub Actions. You can find the code on my <a href="https://github.com/inescsim/my-website" alt="" target="_blank" rel="noopener noreferrer">GitHub account</a>.</p><p>I'm always looking for interesting opportunities, so feel free to <a href="mailto:ines.csim@gmail.com" alt="">say hi</a>!</p>
                    <p className="about-me-icons">
                        <a href="https://www.linkedin.com/in/inescsim/" alt="" target="_blank" rel="noopener noreferrer"><i className="large linkedin icon rotate"></i></a>
                        <a href="https://github.com/inescsim" alt="" target="_blank" rel="noopener noreferrer"><i className="large github icon rotate"></i></a>
                    </p>
                </div>
            </div>
            <div className="experience-subsection">
                <div className="experience-title">
                    <h4>Experience</h4>
                    <div className="download-cv">
                        <a href={cv} download="InesSimoesCV" className="download-cv-btn"><i className="download icon rotate"></i> Download CV</a>
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