const content = [
    {
        id: "ga",
        title: "Full Stack Developer",
        date: "Mar 2021 - present",
        location: "London, United Kingdom",
        description: [
            "At GetAgent, I'm building new features and improving existing code across the stack. I'm also responsible for managing and mentoring a few of my colleagues."
        ],
        company: "GetAgent",
        companyWebsite: "https://www.getagent.co.uk/",
        skills: "Koa.js, Bookshelf.js, Knex.js, Next.js, React, Chakra",
        git: "GitHub"
    },
    {
        id: "haplo",
        title: "Product Lead for Ethics Monitor",
        date: "May 2019 - January 2021",
        location: "London, United Kingdom",
        description: [
            "Product lead for Ethics Monitor, which helps universities streamline the review of applications for ethical approval.",
            "All products and client specific customisations were implemented as server-side JavaScript plugins, using Haplo's​ ​framework API​.",
            "During my time at Haplo I:",
            "* Worked closely with new clients throughout the process of building their custom application, from authentication setup to deployment.",
            "* Provided support for existing clients.",
            "* Mentored a colleague working on the same product.",
            "* Worked alongside my colleagues to improve the product.",
            "* Contributed to weekly discussions on the teams’ challenges and how to improve the way we worked."
        ],
        company: "Haplo",
        companyWebsite: "https://www.haplo.com/",
        skills: "JavaScript",
        git: "Fossil"
    },
    {
        id: "hyp18",
        title: "Software Developer",
        date: "Sep 2018 - Jan 2019",
        location: "Coimbra, Portugal",
        description: [
            "At HYP, I worked with a small team of developers and designers to develop BabyLoop, a platform to buy and sell used baby products (such as cribs, car seats, etc).",
            "My responsabilities included (but where not limited to):",
            "* Building several components of the website, including search and product pages.",
            "* Creating an API to be consumed by the mobile app, using Ruby on Rails API.",
            "* Building the payments’ process (using the SIBS API) as well as invoice generation (using the InvoiceExpress API).",
            "* Configuring emails and the jobs to send them, using Rails’ Active Jobs.",
            "* Building an admin back office, to manage the content of the platform, using rails_admin."
        ],
        company: "HYP",
        companyWebsite: "https://www.hyp.pt/",
        skills: "Ruby on Rails, Ruby, JavaScript, jQuery, HTML, Postman",
        git: "GitLab"
    },
    {
        id: "os",
        title: "Junior Ruby Developer",
        date: "Mar 2017 - Aug 2018",
        location: "Coimbra, Portugal",
        description: [
            "At OneSource, I was tasked with developing an extension for SketchUp to optimize the structure of any building designed by the user using the program. This was done using SketchUp’s Ruby API and in collaboration with a team of civil engineers from the University of Coimbra.", 
            "As the only developer on the team, I was responsible for meetings with the client as well as reviewing and merging the code created by the civil engineers’ team, making sure it worked seamlessly with the general extension code.",
            "The extension ran as a script inside SketchUp’s Ruby environment. I developed the HTML and CSS, as well as the backend of the app (which dealt with calculations, interaction with the database, API calls, etc). Authentication and database download/update were made using AJAX requests to OneSource’s servers, where the information was stored."
        ],
        company: "OneSource",
        companyWebsite: "https://www.onesource.pt/",
        skills: "Ruby, JavaScript, HTML, CSS, jQuery, Postman",
        git: "GitHub"
    },
    {
        id: "hyp16",
        title: "Ruby on Rails Internship",
        date: "Jul 2016 - Sep 2016",
        location: "Coimbra, Portugal",
        description: ["Web application to pick movies to watch with friends, based on which movies everyone on the group wants to watch."],
        company: "HYP",
        companyWebsite: "https://www.hyp.pt/",
        skills: "Ruby on Rails, Ruby, JavaScript, HTML, CSS",
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

    return renderedExperienceItems;
};

export default Experience;