import React from 'react';

const content = {
    en: (<div><img alt="" className="ui small left floated image" src="https://avatars1.githubusercontent.com/u/9520700?s=400&u=1950dd4b3abbd9632d0a8cf9df4c3a7ac7bfb210&v=4"/><p>Hi! My name is Inês (Portuguese pronunciation: <a href="https://translate.google.com/?sl=auto&tl=pt&text=In%C3%AAs&op=translate">iˈneʃ</a>). I'm 28 years old and currently live in London, UK. I moved here in early 2019 for work.</p><p>I have a bachelor in Informatics Engineering by the <a href="https://www.uc.pt/en">University of Coimbra</a> and have been working as a software developer for a few years now. You can read more about my working experience <a href="/experience">here</a>.</p><p>My pandemic hobbies include playing <a href="https://www.animal-crossing.com/">Animal Crossing</a>, listening to podcasts (<a href="https://softskills.audio/">Soft Skills Engineering</a> and <a href="https://www.nosuchthingasafish.com/">No Such Thing As A Fish</a> being my favorites at the moment). I've also been learning French and React.js!</p></div>),
    pt: (<div><img alt="" className="ui small left floated image" src="https://avatars1.githubusercontent.com/u/9520700?s=400&u=1950dd4b3abbd9632d0a8cf9df4c3a7ac7bfb210&v=4"/><p>Olá! O  meu nome é Inês. Tenho 28 anos e vivo em Londres, no Reino Unido.</p><p>Tenho uma licenciatura em Engenharia Informática pela <a href="https://www.uc.pt/">Universidade de Coimbra</a> e desenvolvo software há cerca de x anos. Mais detalhes sobre a minha experiência <a href="/experience">aqui</a>.</p><p>Os meus hobbies durante a pandemia resumem se a jogar <a href="https://www.animal-crossing.com/">Animal Crossing</a>, ouvir podcasts (sendo <a href="https://softskills.audio/">Soft Skills Engineering</a> e <a href="https://www.nosuchthingasafish.com/">No Such Thing As A Fish</a> os preferidos de momento), assim como aprender francês e React.js.</p></div>)
}

const AboutMe = ({ useEnglishLanguage }) => {
    return useEnglishLanguage ? content.en : content.pt;
};

export default AboutMe;