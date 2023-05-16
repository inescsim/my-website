const content = [
    {
        id: "ga",
        title: "Full Stack Developer",
        date: "Mar 2021 - April 2023",
        location: "London, United Kingdom",
        description: [
            "* Maintained and improved the product as a Full Stack Developer.",
            "* Led a team of two developers in building a new product, collaborating with the Product Manager and Product Designer to generate ideas for new features based on user research, while ensuring technical feasibility.",
            "* Made decisions on the architecture of new tasks.",
            "* Performed final technical QA of teamwork and eventual release.",
            "* Collaborated with other teams in the business (CRM, marketing, SEO, etc.).",
            "* Provided mentorship and management to trainees and junior developers in order to improve their performance and productivity, as well as to assist with their career progression."
        ],
        company: "GetAgent",
        companyWebsite: "https://www.getagent.co.uk/",
        skills: "Koa · MySQL · React · Next.js · Chakra · Figma · Trello · Asana · CustomerIO · GitHub"
    },
    {
        id: "haplo",
        title: "Product Lead for Ethics Monitor",
        date: "May 2019 - January 2021",
        location: "London, United Kingdom",
        description: [
            "* Led the end-to-end development process for custom applications, from authentication setup to successful deployment, ensuring client satisfaction.",
            "* Provided support to existing clients.",
            "* Mentored a team member, resulting in improved skills and contributions to the product.",
            "* Actively participated in weekly discussions on team challenges. "
        ],
        company: "Haplo",
        companyWebsite: "https://www.haplo.com/",
        skills: "JavaScript · Trello · Fossil"
    },
    {
        id: "hyp18",
        title: "Software Developer",
        date: "Sep 2018 - Jan 2019",
        location: "Coimbra, Portugal",
        description: [
            "* Collaborated with a team of developers and designers to create and launch BabyLoop, a successful platform for buying and selling used baby products.",
            "* Implemented various website components, including search and product pages, for a seamless user experience.",
            "* Built the payments process and invoice generation using SIBS API and InvoiceExpress API respectively.",
            "* Configured email jobs within Rails' Active Jobs to streamline communication processes.",
            "* Utilised Ruby on Rails API to develop an API consumed by the mobile app.",
            "* Developed an admin back office using rails_admin to efficiently manage platform content."
        ],
        company: "HYP",
        companyWebsite: "https://www.hyp.pt/",
        skills: "Ruby on Rails · PostgreSQL · jQuery · JavaScript · HTML · Trello · GitLab"
    },
    {
        id: "os",
        title: "Junior Ruby Developer",
        date: "Mar 2017 - Aug 2018",
        location: "Coimbra, Portugal",
        description: [
            "* Developed a SketchUp extension in collaboration with civil engineers from the University of Coimbra to optimize building structures, using SketchUp’s Ruby API.",
            "* Acted as the lead developer on the project and managed meetings with clients while reviewing and merging code from the civil engineering team for seamless integration.",
            "* Led the development of the app interface as well as backend functionality, including calculations, database interaction, and API calls."
        ],
        company: "OneSource",
        companyWebsite: "https://www.onesource.pt/",
        skills: "Ruby · HTML · jQuery · JavaScript · CSS · Postman · Trello · GitHub"
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
                    <p><i className="file code icon"></i>{c.skills}</p>
                </div>
            </div>
        );
      });

    return renderedExperienceItems;
};

export default Experience;