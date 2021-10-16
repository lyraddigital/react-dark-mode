import style from './MainNavigation.module.scss';

export const MainNavigation = () => {
    return (
        <nav id={ style.navigationContainer }>
            <ul id={ style.mainNavigation }>
                <li>
                    <a className={ style.active } href="/">Insights</a>
                </li>
            </ul>
        </nav>
    );
}