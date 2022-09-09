import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useMobileBreakpoint = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return isMobile;
};

export const useSmallBreakpoint = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return isSmall;
};

export const useMediumBreakpoint = () => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.between("md", "lg"));
    return isMedium;
};

export const useLargeBreakpoint = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.between("lg", "xl"));
    return isLarge;
};

export const useExtraLargeBreakpoint = () => {
    const theme = useTheme();
    const isExtraLarge = useMediaQuery(theme.breakpoints.up("xl"));
    return isExtraLarge;
};
