import classNames from 'classnames';

import { useTheme } from 'hooks';

import style from './GroupForm.module.scss';

export const GroupForm = ({ title, children }) => {
    const { isDarkMode } = useTheme();
    const groupBodyClasses = classNames({
        [style.groupFormBody]: true,
        [style.darkMode]: isDarkMode
    });

    return (
        <form className={ style.groupForm }>
            <h2>{ title }</h2>
            <div className={ groupBodyClasses }> 
                { children }
            </div>
            <div className={style.buttonRow}>
                <button type="button">Save</button>
            </div>
        </form>
    );
};