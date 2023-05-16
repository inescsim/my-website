import Experience from "./Experience";
import avatar from "../files/1.png";
import cv from '../files/cv.pdf';

const AboutMe = () => {
    return (
        <div className="about-me-section">
            <div className="about-me-avatar">
                <img alt="" src={avatar}/>
            </div>
            <div className="about-me-subsection">
                <h4>About</h4>
                <div className="about-me-content about-content-sections">
                    <p>Hi! My name is Inês (Portuguese pronunciation: <a href="https://translate.google.com/?sl=auto&tl=pt&text=In%C3%AAs&op=translate" target="_blank" rel="noopener noreferrer">iˈneʃ</a>). I'm 30 years old and live in Coimbra, Portugal. I've recently relocated after living in London for 4 years.</p>
                    <p>I have a bachelor in Informatics Engineering by the <a href="https://www.uc.pt/en" target="_blank" rel="noopener noreferrer">University of Coimbra</a> and have been working as a software developer for a few years now.</p>
                    <p>During my free time, I enjoy reading books, playing on my Nintendo Switch, and meeting friends to play board games. I also enjoy listening to the occasional podcast - <a href="https://softskills.audio/" target="_blank" rel="noopener noreferrer">Soft Skills Engineering</a> and <a href="https://open.spotify.com/show/0xDEeqWuoMNBUFGNrhIz6L" target="_blank" rel="noopener noreferrer">It's Always Sunny</a> being my favorites at the moment.</p>
                    <p>I'm currently looking for work, so feel free to <a href="mailto:ines.csim@gmail.com" alt="">say hi</a>!</p>
                    <p className="about-me-icons">
                        <a href="https://www.linkedin.com/in/inescsim/" alt="" target="_blank" rel="noopener noreferrer"><i className="large linkedin icon"></i></a>
                        <a href="https://github.com/inescsim" alt="" target="_blank" rel="noopener noreferrer"><i className="large github icon"></i></a>
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
                <div className="about-content-sections">
                    <Experience />
                </div>
            </div>
        </div>
    )
};

export default AboutMe;