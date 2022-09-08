import {Typography} from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <Typography>Header</Typography>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Typography>Footer</Typography>
            </footer>
        </>
    );
};

export default Layout;
