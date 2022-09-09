import {ThemeContextProvider} from "features/theme/context/ThemeContextProvider";
import React from "react";
import Router from "Router";

const App: React.FC = () => (
    <ThemeContextProvider>
        <Router />
    </ThemeContextProvider>
);

export default App;
