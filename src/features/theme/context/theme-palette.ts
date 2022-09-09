import {PaletteMode} from "@mui/material";
import {grey, lightBlue, red} from "@mui/material/colors";

const getLightPalette = (mode: string) => ({
    mode: mode as PaletteMode,
    primary: {
        main: "#c90023"
    },
    secondary: {
        main: "#666666"
    },
    background: {
        default: grey[50]
    },
    frame: grey[200],
    chips: {
        highlighted: grey[400]
    },
    chartPrimary: {
        main: lightBlue[700]
    },
    battery: {
        shell: grey[300],
        default: grey[400],
        low: red[200]
    },
    customBackground: {
        selected: grey[400],
        hover: grey[300]
    },
    text: {
        primary: grey[900]
    },
    drawerIcon: grey[900]
});

const getDarkPalette = (mode: string) => ({
    mode: mode as PaletteMode,
    primary: {
        main: "#c90023"
    },
    secondary: {
        main: "#666666"
    },
    background: {
        paper: grey[800],
        default: "#303030"
    },
    frame: grey[900],
    chips: {
        highlighted: grey[600]
    },
    chartPrimary: {
        main: lightBlue[700]
    },
    battery: {
        shell: grey[700],
        default: grey[500],
        low: red[300]
    },
    customBackground: {
        selected: grey[500],
        hover: grey[600]
    },
    text: {
        primary: grey[50]
    },
    drawerIcon: grey[300]
});

export const createThemePalette = (mode: string) => {
    const palette = mode === "light" ? getLightPalette(mode) : getDarkPalette(mode);

    return palette;
};
