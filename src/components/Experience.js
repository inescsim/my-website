import React from 'react';

const content = [
    {
        id: "haplo",
        title: "Product lead for Ethics Monitor",
        date: "May 2019 to Present",
        description: ["Product lead for Ethics Monitor, which helps universities streamline the review of applications for ethical approval.", "During my time at Haplo I worked closely with new clients throughout the process of building their custom application, provided support for existing clients and worked alongside my colleagues to improve the product."],
        company: "Haplo",
        companyWebsite: "https://www.haplo.com/",
        skills: ["https://cdn.iconscout.com/icon/free/png-64/javascript-1-225993.png"]
    },
    {
        id: "hyp18",
        title: "Software Developer",
        date: "Sep 2018 to Jan 2019",
        description: ["Collaboration with The Loop Co to develop babyloop.pt, a platform to buy and sell used baby products (such as cribs, car seats, etc)."],
        company: "HYP",
        companyWebsite: "https://www.hyp.pt/",
        skills: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1280px-Ruby_On_Rails_Logo.svg.png", "https://cdn.iconscout.com/icon/free/png-64/ruby-226055.png", "https://cdn.iconscout.com/icon/free/png-64/javascript-1-225993.png"]
    },
    {
        id: "os",
        title: "Junior Ruby Developer",
        date: "Mar 2017 to Aug 2018",
        description: ["Extension for SketchUp to optimize the structure of the building designed by the user as well as maintenance and building costs so as to render the optimal solution. SketchUp’s API was used to assess any relevant information of the building so as to conclude about properties like number of floors (including underground), available floor space, etc and therefore the costs and optimization needed."],
        company: "OneSource",
        companyWebsite: "https://www.onesource.pt/",
        skills: ["https://cdn.iconscout.com/icon/free/png-64/ruby-226055.png", "https://cdn.iconscout.com/icon/free/png-64/javascript-1-225993.png"]
    },
    {
        id: "hyp16",
        title: "Ruby on Rails Internship",
        date: "Jul 2016 to Sep 2016",
        description: ["Small web application to pick movies to watch with friends, based on which movies everyone wants to watch."],
        company: "HYP",
        companyWebsite: "https://www.hyp.pt/",
        skills: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1280px-Ruby_On_Rails_Logo.svg.png", "https://cdn.iconscout.com/icon/free/png-64/ruby-226055.png", "https://cdn.iconscout.com/icon/free/png-64/javascript-1-225993.png"]
    }
];

const Experience = () => {
    const renderedExperienceItems = content.map((c) => {
        return (
            <div className="experience-item" key={c.id}>
                <div className="experience-item-header">
                    <h4>{c.title}</h4>
                    <p>{c.date}</p>
                </div>
                <div className="experience-item-content">
                    {c.description.map((d,i) => <p key={`experience-description-${i}`}>{d}</p>)}
                </div>
                <div className="experience-item-footer">
                    <div className="experience-item-footer-left">
                        {c.skills.map((s,i) => <img alt="" src={s} key={`skills-icon-${i}`}/>)}
                    </div>
                    <div className="experience-item-footer-right">
                        <a href={c.companyWebsite} target="_blank" rel="noopener noreferrer">
                            {c.company}
                        </a>
                    </div>
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