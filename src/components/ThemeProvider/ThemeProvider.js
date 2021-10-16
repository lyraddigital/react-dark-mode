import { useState } from "react";

import { ThemeContext } from "core/theme/ThemeContext";
import { SlideToggle } from "components/SlideToggle";

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <ThemeContext.Provider value={ { isDarkMode, toggleDarkMode } }>
            { children }
            <SlideToggle />
        </ThemeContext.Provider>
    );
}