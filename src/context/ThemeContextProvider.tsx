import {createTheme, ThemeProvider} from "@mui/material";
import React, {useMemo, useState} from "react";
import "@fontsource/open-sans";
import {createThemePalette} from "store/ThemeContext/theme-palette";
import {createThemeStyles} from "store/ThemeContext/theme-styles";
import {useInitialThemeMode} from "hooks/use-initial-theme-mode";
import {useMobileBreakpoint} from "hooks/use-breakpoint";

type ContainerMaxWidth = "md" | "lg" | "xl";

declare module "@mui/material/styles" {
    interface Theme {
        drawerWidth: number;
        drawerHeight: {
            header: number;
            footer: number;
            divider: number;
        };
        containerMaxWidth: ContainerMaxWidth;
    }

    export interface Palette {
        frame: string;
        chips: {highlighted: string};
        chartPrimary: {main: string};
        battery: {shell: string; default: string; low: string};
        customBackground: {hover: string; selected: string};
        drawerIcon: string;
    }

    interface PaletteOptions {
        frame: string;
        chips: {highlighted: string};
        chartPrimary: {main: string};
        battery: {shell: string; default: string; low: string};
        customBackground: {hover: string; selected: string};
        drawerIcon: string;
    }

    interface ThemeOptions {
        drawerWidth?: number;
        drawerHeight?: {
            header?: number;
            footer?: number;
            divider?: number;
        };
        containerMaxWidth?: ContainerMaxWidth;
    }
}

interface ThemeContextData {
    currentTheme: string;
    toggleDarkMode: () => void;
}

const ThemeContext = React.createContext<ThemeContextData>({
    currentTheme: "light",
    toggleDarkMode: () => {}
});

export const ThemeContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
    let initialMode = useInitialThemeMode();
    const isMobile = useMobileBreakpoint();
    const [mode, setMode] = useState<string>(initialMode);

    const {palette, components} = useMemo(() => {
        const palette = createThemePalette(mode);
        const components = createThemeStyles(palette);
        return {palette, components};
    }, [mode]);

    const theme = createTheme({
        drawerWidth: isMobile ? 220 : 90,
        drawerHeight: {
            header: 56,
            footer: 94,
            divider: 2.5
        },
        containerMaxWidth: "xl",
        typography: {
            fontFamily: ["open sans", "Helvetica Neue", "Arial", "sans-serif"].join(",")
        },
        palette: palette,
        components: components
    });

    const toggleDarkModeHandler = () => {
        setMode((prev) => {
            const newMode = prev === "dark" ? "light" : "dark";
            localStorage.setItem("palette-mode", newMode);
            return newMode;
        });
    };

    const contextValue = {
        toggleDarkMode: toggleDarkModeHandler,
        currentTheme: mode
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
