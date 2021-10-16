import { useContext } from "react";

import { ThemeContext } from "core/theme/ThemeContext";

export const useTheme = () => {
    return useContext(ThemeContext);
}