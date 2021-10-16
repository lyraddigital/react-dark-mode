import classNames from "classnames";

import style from './SlideToggle.module.scss';

export const SlideToggle = ({ isDarkMode, toggleDarkMode }) => {
    const textEl = isDarkMode ? (
        <span className={ style.positiveText }>Yes</span>
    ) : (
        <span className={ style.negativeText }>No</span> 
    );

    const toggleButtonClasses = classNames({
        [style.slideToggleButton]: true,
        [style.active]: isDarkMode
    });

    return (
        <div style={ { color: '#EEE', display: 'flex', alignItems: 'center', columnGap: '20px' }}>
            <span>Dark Mode?</span>
            <div className={ style.slideToggle } onClick={toggleDarkMode}>
                { textEl }
                <span className={ toggleButtonClasses }></span>
            </div>
        </div>
    );
}