import { useContext } from "react";

import { ThemeContext } from "core/theme";

export const useTheme = () => {
    return useContext(ThemeContext);
}