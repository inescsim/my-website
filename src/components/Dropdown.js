import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }

        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                <i class={`${option.icon} flag`}></i>
            </div>
        );
    });

    return (
        <div className="dropdown">
            <button className="dropbtn"></button>
            <div className="dropdown-content">
                {renderedOptions}
            </div>
        </div>
    );
};

export default Dropdown;