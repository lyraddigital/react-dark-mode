import classNames from 'classnames';

import style from './FormField.module.scss';

export const FormField = ({ fieldName, children, explanation, isDarkMode }) => {
    const explanationEl = explanation ? (
        <div className={ style.formFieldExplanation }>{explanation}</div>
    ): null;

    const formFieldLabelClasses = classNames({
        [style.formFieldLabel]: true,
        [style.darkMode]: isDarkMode
    });

    const formFieldClasses = classNames({
        [style.formField]: true,
        [style.darkMode]: isDarkMode
    });

    return (
        <>
            <label className={ formFieldLabelClasses }>{ fieldName }</label>
            <div className={ formFieldClasses }>
                { children }
                { explanationEl }
            </div>
        </>
    );
};