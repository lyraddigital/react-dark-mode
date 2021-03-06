import classNames from "classnames";


import { useTheme } from "hooks";
import { BannerIcon } from "components/Icons";
import { MainNavigation } from './MainNavigation/MainNavigation'
import { Footer } from "./Footer/Footer";

import style from './Layout.module.scss';

export const Layout = ({ children }) => {
    const { isDarkMode } = useTheme();
    const layoutClasses = classNames({
        [style.darkMode]: isDarkMode
    });

    return (
        <main id={ style.layout } className={ layoutClasses }>
            <header>
                <BannerIcon />
                <MainNavigation />                
            </header>
            <div id={ style.pageContent }>
                <div id={ style.mainContent }>
                    { children }
                </div>
                <Footer />
            </div>
        </main>
    );
}
