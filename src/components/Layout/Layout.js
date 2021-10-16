import classNames from "classnames";

import { BannerIcon } from "components/Icons";
import { MainNavigation } from './MainNavigation/MainNavigation'
import { Footer } from "./Footer/Footer";
import { SlideToggle } from "components/Forms/SlideToggle/SlideToggle";

import style from './Layout.module.scss';

export const Layout = ({ children, toggleDarkMode, isDarkMode }) => {
    const layoutClasses = classNames({
        [style.darkMode]: isDarkMode
    });

    return (
        <main id={ style.layout } className={ layoutClasses }>
            <header>
                <BannerIcon />
                <MainNavigation />
                <SlideToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
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
