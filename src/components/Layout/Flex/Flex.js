import classNames from 'classnames';

import style from './Flex.module.scss';

export const Flex = ({ children, direction, justifyContent, alignItems }) => {
    const classes = classNames({
        [style.flex]: true,
        [style.row]: direction === 'row',
        [style.column]: direction === 'column',
        [style.alignStart]: alignItems === 'start',
        [style.alignCenter]: alignItems === 'center',
        [style.justifyCenter]: justifyContent === 'center'
    });

    return (
        <div className={ classes }>
            {children}
        </div>
    );
}