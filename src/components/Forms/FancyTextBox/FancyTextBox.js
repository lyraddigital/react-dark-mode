import classNames from 'classnames';

import { useTheme } from 'hooks';

import style from './FancyTextBox.module.scss';

export const FancyTextBox = ({ hideText, value }) => {
    const { isDarkMode } = useTheme();
    const type = hideText ? 'password': 'text';

    const textboxClasses = classNames({
        [style.fancyTextbox]: true,
        [style.darkMode]: isDarkMode
    });

    return (
        <input className={textboxClasses} type={type} defaultValue={value} />
    );
};