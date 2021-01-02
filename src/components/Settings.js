import React from 'react';

const Settings = ({ open, onSettingsClick, useEnglishLanguage, setUseEnglishLanguage, darkTheme, setDarkTheme }) => {
    const theme = darkTheme ? "sun" : "moon";
    const language = useEnglishLanguage ? "pt" : "gb uk";

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
                <div className="settings-menu-row toggle-btns">
                    <i className={`${language} flag`} onClick={() => setUseEnglishLanguage(!useEnglishLanguage)}></i>
                    <i className={`${theme} icon bottom-btn`} onClick={() => setDarkTheme(!darkTheme)}></i>
                </div>
            </div>
        </div>
    );
};

export default Settings;