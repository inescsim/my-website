import React from 'react';

const content = [
    {
        id: "haplo",
        title: "Product Lead for Ethics Monitor",
        date: "May 2019 to January 2021",
        location: "London, United Kingdom",
        description: ["Product lead for Ethics Monitor, which helps universities streamline the review of applications for ethical approval.", "During my time at Haplo I worked closely with new clients throughout the process of building their custom application, provided support for existing clients and worked alongside my colleagues to improve the product."],
        company: "Haplo",
        companyWebsite: "https://www.haplo.com/",
        skills: "JavaScript",
        git: "Fossil"
    },
    {
        id: "hyp18",
        title: "Software Developer",
        date: "Sep 2018 to Jan 2019",
        location: "Coimbra, Portugal",
        description: ["At HYP, I worked with a small team of developers and designers to develop BabyLoop, a platform to buy and sell used baby products (such as cribs, car seats, etc)."],
        company: "HYP",
        companyWebsite: "https://www.hyp.pt/",
        skills: "Ruby on Rails, Ruby, JavaScript",
        git: "GitLab"
    },
    {
        id: "os",
        title: "Junior Ruby Developer",
        date: "Mar 2017 to Aug 2018",
        location: "Coimbra, Portugal",
        description: ["At OneSource, I was tasked with developing an extension for SketchUp to optimize the structure of any building designed by the user using the program. This was done using SketchUp’s Ruby API and in collaboration with a team of civil engineers from the University of Coimbra.", "As the only developer on the team, I was responsible for meetings with the client as well as reviewing and merging the code created by the civil engineers’ team, making sure it worked seamlessly with the general extension code."],
        company: "OneSource",
        companyWebsite: "https://www.onesource.pt/",
        skills: "Ruby, JavaScript",
        git: "GitHub"
    },
    {
        id: "hyp16",
        title: "Ruby on Rails Internship",
        date: "Jul 2016 to Sep 2016",
        location: "Coimbra, Portugal",
        description: ["Web application to pick movies to watch with friends, based on which movies everyone on the group wants to watch."],
        company: "HYP",
        companyWebsite: "https://www.hyp.pt/",
        skills: "Ruby on Rails, Ruby, JavaScript",
        git: "GitLab"
    }
];

const Experience = () => {
    const renderedExperienceItems = content.map((c) => {
        return (
            <div className="experience-item" key={c.id}>
                <div className="experience-item-header">
                    <p>{c.title} at <a href={c.companyWebsite} target="_blank" rel="noopener noreferrer">{c.company}</a></p>
                </div>
                <div className="experience-item-icons">
                    <p><i className="clock outline icon"></i>{c.date}</p>
                    <p><i className="map marker alternate icon"></i>{c.location}</p>
                </div>
                <div className="experience-item-content">
                    {c.description.map((d,i) => <p key={`experience-description-${i}`}>{d}</p>)}
                </div>
                <div className="experience-item-icons">
                    <p><i className="code branch icon"></i>{c.git}</p>
                    <p><i className="file code icon"></i>{c.skills}</p>
                </div>
            </div>
        );
      });

    return(
        <React.Fragment>
            {renderedExperienceItems}
        </React.Fragment>
    );
};

export default Experience;