import {useMediaQuery} from "@mui/material";

const isValidPaletteMode = (value: string | null) => {
    return value === "light" || value === "dark";
};

export const useInitialThemeMode = () => {
    let initialMode = localStorage.getItem("palette-mode");

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
        // noSsr is required to avoid the initial flickering between light and dark mode,
        // see https://github.com/mui/material-ui/issues/15588
        noSsr: true
    });

    if (!isValidPaletteMode(initialMode)) {
        initialMode = prefersDarkMode ? "dark" : "light";
    }

    return initialMode;
};
