import classNames from 'classnames';

import style from './GroupForm.module.scss';

export const GroupForm = ({ title, children, isDarkMode }) => {
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