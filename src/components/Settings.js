import React, { useState } from 'react';

const Settings = ({ open, onSettingsClick }) => {
    return (
        <div className="settings">
            <div className="settings-menu-icon">
                <i className="cog icon" onClick={() => onSettingsClick(!open)}></i>
            </div>
            <div className={`settings-menu ${open ? "settings-menu-active" : ""}`}>
                <div className="settings-menu-row">
                    <p>Language</p>
                    <p>Theme</p>
                </div>
                <div className="settings-menu-row">
                    <p>Toggle</p>
                    <p>Toggle</p>
                </div>
            </div>
        </div>
    );
};

export default Settings;