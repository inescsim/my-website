import React from 'react';
import SubSection from './SubSection';

const Section = ({ title, id, children }) => {
    const renderedSubSections = children.map((c) => <SubSection content={c} key={`${id}-subsection`} /> );

    return (
        <div className="section">
            <h3>{title}</h3>
            {renderedSubSections}
        </div>
    );
};

export default Section;