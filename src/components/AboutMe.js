import React from 'react';

const AboutMe = () => {
    return (
        <div className="about-me-section">
            <p className="about-me-avatar">
                <img alt="" src="https://avatars1.githubusercontent.com/u/9520700?s=400&u=1950dd4b3abbd9632d0a8cf9df4c3a7ac7bfb210&v=4"/>
            </p>
            <p className="about-me-icons">
                <a href="https://github.com/inescsim" alt="" target="_blank" rel="noopener noreferrer"><i className="large github icon"></i></a>
                <a href="https://www.linkedin.com/in/inescsim/" alt="" target="_blank" rel="noopener noreferrer"><i className="large linkedin icon"></i></a>
                <a href="mailto:ines.csim@gmail.com" alt=""><i className="large envelope icon"></i></a>
            </p>
            <div className="about-me-text">
                <p>Hi! My name is Inês (Portuguese pronunciation: <a href="https://translate.google.com/?sl=auto&tl=pt&text=In%C3%AAs&op=translate"  target="_blank" rel="noopener noreferrer">iˈneʃ</a>). I'm 28 years old and live in London, UK. I moved here in early 2019 for work.</p><p>I have a bachelor in Informatics Engineering by the <a href="https://www.uc.pt/en" target="_blank" rel="noopener noreferrer">University of Coimbra</a> and have been working as a software developer for a few years now.</p><p>My pandemic hobbies include playing <a href="https://www.animal-crossing.com/" target="_blank" rel="noopener noreferrer">Animal Crossing</a>, listening to podcasts (<a href="https://softskills.audio/" target="_blank" rel="noopener noreferrer">Soft Skills Engineering</a> and <a href="https://www.nosuchthingasafish.com/" target="_blank" rel="noopener noreferrer">No Such Thing As A Fish</a> being my favorites at the moment). I've also been learning French and React.js!</p>
            </div>
        </div>
    )
};

export default AboutMe;