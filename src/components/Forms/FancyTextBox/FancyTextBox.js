import classNames from 'classnames';
import style from './FancyTextBox.module.scss';

export const FancyTextBox = ({ hideText, value, isDarkMode }) => {
    const type = hideText ? 'password': 'text';

    const textboxClasses = classNames({
        [style.fancyTextbox]: true,
        [style.darkMode]: isDarkMode
    });

    return (
        <input className={textboxClasses} type={type} defaultValue={value} />
    );
};