import classNames from 'classnames';

import { useTheme } from 'hooks';

import style from './InsightTile.module.scss';

export const InsightTile = ({ insight, subTitle, title }) => {
    const { isDarkMode } = useTheme();
    const insightTileClasses = classNames({
        [style.insightTile]: true,
        [style.darkMode]: isDarkMode
    });

    return (
        <section className={ insightTileClasses }>
            <h3>{ title }</h3>
            <h4>{ subTitle }</h4>

            <div className={ style.insight }>{ insight }</div>
        </section>
    );
}