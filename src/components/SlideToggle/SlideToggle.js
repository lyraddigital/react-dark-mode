import classNames from "classnames";

import { useTheme } from "hooks";

import style from './SlideToggle.module.scss';

export const SlideToggle = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
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
        <div className={ style.toggleButtonContainer }>
            <span>Dark Mode?</span>
            <div className={ style.slideToggle } onClick={toggleDarkMode}>
                { textEl }
                <span className={ toggleButtonClasses }></span>
            </div>
        </div>
    );
}